// Fixed: Using useMultiFileAuthState for baileys v5 compatibility
const { makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, makeInMemoryStore, jidNormalizedUser, DisconnectReason } = require('@adiwajshing/baileys')
nsole.log("DEBUG: Using useMultiFileAuthState - baileys v5")
const { state, saveState } = useMultiFileAuthState('./sessions/auth_info.json')
const P = require('pino')
const qrcode = require('qrcode')
const qrcodeTerminal = require('qrcode-terminal')
const fs = require('fs')
const path = require('path')
const { load, save } = require('./lib/data')

const COMMAND_PREFIX = '!'
const CONFIG_PATH = './config.json'

let config = { features: { autotyping: false, autorecording: false, alwaysOnline: false, antivoince: false } }
if (fs.existsSync(CONFIG_PATH)) {
  try { config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8')) } catch (e) { console.error('Impossible de lire config.json', e) }
}
function saveConfig() { fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2)) }

// Track last QR generation timestamp and expose the socket & commands for admin endpoints
let lastQrGeneratedAt = null
let sockRef = null
let commandsRef = null

async function start() {
  const logger = P({ level: 'info' })
  const { version, isLatest } = await fetchLatestBaileysVersion()
  console.log('Baileys version', version, 'isLatest:', isLatest)

  const sock = makeWASocket({ auth: state, logger })
  // expose current socket reference for admin endpoints
  sockRef = sock
  const store = makeInMemoryStore({})
  store.bind(sock.ev)

  // load commands via loader
  const { loadCommands } = require('./commands/loader')
  const commands = loadCommands(path.join(__dirname, 'commands'))
  // expose commands map for admin endpoints
  commandsRef = commands
  console.log('Commandes chargées:', Array.from(commands.keys()).join(', '))

  // presence helpers
  let presenceInterval = null

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update
    if (qr) {
      console.log('QR reçu — scannez-le avec votre téléphone:')
      qrcodeTerminal.generate(qr, { small: true })
      qrcode.toFile('./qr.png', qr).catch(()=>{})
      // record when the QR was last generated (used by admin UI)
      lastQrGeneratedAt = Date.now()
    }
    if (connection === 'close') {
      const code = (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output) ? lastDisconnect.error.output.statusCode : null
      console.log('Connexion fermée', code)
      if (code === DisconnectReason.loggedOut) {
        console.log('Session déconnectée — supprimez sessions et reconnectez pour regénérer QR')
        try { fs.unlinkSync('./sessions/auth_info.json') } catch (e) {}
      } else {
        console.log('Reconnextion en cours...')
        start()
      }
    }
    if (connection === 'open') {
      console.log('Connecté ✅')
      // start presence loop if alwaysOnline
      if (config.features.alwaysOnline && !presenceInterval) {
        presenceInterval = setInterval(()=>{
          try { sock.presenceSubscribe(sock.user.id) } catch (e) {}
        }, 60000)
      }
    }
    saveState()
  })

  sock.ev.on('messages.upsert', async (m) => {
    if (!m.messages || m.type !== 'notify') return
    const msg = m.messages[0]
    if (!msg.message) return
    const data = load()
    const senderId = msg.key.participant || msg.key.remoteJid
    if (data.banned && data.banned.includes(senderId)) return
    const sender = jidNormalizedUser(msg.key.remoteJid || '')

    // persistent data already loaded above; check continues
    if (config.features.antivoince && msg.message && msg.message.audioMessage) {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Les messages vocaux sont désactivés dans ce bot.' }, { quoted: msg })
      return
    }

    // auto-typing / auto-recording: simulate actions when bot is about to reply
    async function simulateInteraction(to) {
      try {
        if (config.features.autotyping) await sock.sendPresenceUpdate('composing', to)
        if (config.features.autorecording) await sock.sendPresenceUpdate('recording', to)
        // stop after short delay
        setTimeout(()=> sock.sendPresenceUpdate('available', to), 1500)
      } catch (e) {}
    }

    // simple command parser
    try {
      const content = msg.message.conversation || (msg.message.extendedTextMessage && msg.message.extendedTextMessage.text) || ''

      // antilink check for groups
      try {
        const jid = msg.key.remoteJid
        if (jid && jid.endsWith('@g.us') && data.groupSettings && data.groupSettings[jid] && data.groupSettings[jid].antilink) {
          const linkRegex = /https?:\/\/[\w.-]+|t\.me\/|wa\.me\//i
          if (linkRegex.test(content)) {
            data.warns = data.warns || {}
            data.warns[senderId] = (data.warns[senderId] || 0) + 1
            save(data)
            await sock.sendMessage(jid, { text: `Lien détecté. Avertissement ${data.warns[senderId] || 0}` }, { quoted: msg })
            if (data.warns[senderId] >= 3) {
              try { await sock.groupParticipantsUpdate(jid, [senderId], 'remove'); await sock.sendMessage(jid, { text: `${senderId} expulsé pour violation d'antilink.` }) } catch (e) {}
            }
            return
          }
        }
      } catch (e) { console.error('Erreur antilink', e) }

      // antibadword: check group badwords list
      try {
        const jid = msg.key.remoteJid
        if (jid && jid.endsWith('@g.us') && data.groupSettings && data.groupSettings[jid] && Array.isArray(data.groupSettings[jid].badwords) && data.groupSettings[jid].badwords.length) {
          const badwords = data.groupSettings[jid].badwords.map(w=>w.toLowerCase())
          const found = badwords.find(w => content.toLowerCase().includes(w))
          if (found) {
            data.warns = data.warns || {}
            data.warns[senderId] = (data.warns[senderId] || 0) + 1
            save(data)
            await sock.sendMessage(jid, { text: `Mot interdit détecté (${found}). Avertissement ${data.warns[senderId] || 0}` }, { quoted: msg })
            if (data.warns[senderId] >= 3) {
              try { await sock.groupParticipantsUpdate(jid, [senderId], 'remove'); await sock.sendMessage(jid, { text: `${senderId} expulsé pour répétition de mots interdits.` }) } catch (e) {}
            }
            return
          }
        }
      } catch (e) { console.error('Erreur antibadword', e) }

      // mute: if group is muted, delete messages from non-admins
      try {
        const jid = msg.key.remoteJid
        if (jid && jid.endsWith('@g.us') && data.groupSettings && data.groupSettings[jid] && data.groupSettings[jid].muted) {
          // allow admins
          const meta = await sock.groupMetadata(jid)
          const participant = msg.key.participant || msg.key.remoteJid
          const isAdmin = meta.participants.find(p=>p.id===participant && (p.admin || p.isAdmin))
          if (!isAdmin) {
            try { await sock.sendMessage(jid, { text: 'Le groupe est en mode silence.' }, { quoted: msg }) } catch (e) {}
            // optionally delete message (requires bot admin)
            try { await sock.sendMessage(jid, { delete: msg.key }) } catch (e) {}
            return
          }
        }
      } catch (e) { console.error('Erreur mute handling', e) }

      if (!content.startsWith(COMMAND_PREFIX)) return
      const without = content.slice(COMMAND_PREFIX.length).trim()
      const [cmdName, ...args] = without.split(/\s+/)
      const cmd = commands.get(cmdName.toLowerCase())
      if (!cmd) {
        await simulateInteraction(msg.key.remoteJid)
        await sock.sendMessage(msg.key.remoteJid, { text: `Commande inconnue: ${cmdName}. Utilise !help` }, { quoted: msg })
        return
      }
      // mode: if bot in private mode, only owners may execute commands
      try {
        const d = load()
        const mode = d.bot && d.bot.mode || 'public'
        const caller = msg.key.participant || msg.key.remoteJid
        const { isOwner } = require('./lib/auth')
        if (mode === 'private' && !isOwner(caller)) {
          await sock.sendMessage(msg.key.remoteJid, { text: 'Le bot est en mode privé. Seuls les propriétaires peuvent exécuter des commandes.' }, { quoted: msg })
          return
        }
      } catch (e) {}

      await simulateInteraction(msg.key.remoteJid)
      // If an image asset exists for the command, send it as a header before running the command
      try {
        const possible = [
          path.join(__dirname, 'assets', `${cmd.name}.png`),
          path.join(__dirname, 'assets', `${cmd.name}.jpg`),
          path.join(__dirname, 'assets', `${cmd.name}.svg`),
          path.join(__dirname, 'assets', 'headers', `${cmd.name}.svg`),
          path.join(__dirname, 'assets', 'headers', 'command.svg')
        ]
        for (const p of possible) {
          if (fs.existsSync(p)) {
            const buffer = fs.readFileSync(p)
            await sock.sendMessage(msg.key.remoteJid, { image: buffer, caption: `${cmd.name} — ${cmd.description || ''}` }, { quoted: msg })
            break
          }
        }
      } catch (e) { console.error('Erreur en envoyant header image', e) }

      await cmd.exec({ sock, msg, args, config, saveConfig, commands, store })
    } catch (e) { console.error('Erreur en traitant message', e) }
  })

  // welcome / goodbye handling for groups
  sock.ev.on('group-participants.update', async (updates) => {
    try {
      const data = require('../data.json')
      for (const u of updates) {
        const jid = u.id
        const participants = u.participants || []
        if (u.action === 'add' && data.groupSettings && data.groupSettings[jid] && data.groupSettings[jid].welcome) {
          const text = data.groupSettings[jid].welcome.replace(/\{user\}/g, participants.map(p=>`@${p.split('@')[0]}`).join(', '))
          await sock.sendMessage(jid, { text, mentions: participants })
        }
        if (u.action === 'remove' && data.groupSettings && data.groupSettings[jid] && data.groupSettings[jid].goodbye) {
          const text = data.groupSettings[jid].goodbye.replace(/\{user\}/g, participants.map(p=>`@${p.split('@')[0]}`).join(', '))
          await sock.sendMessage(jid, { text, mentions: participants })
        }
      }
    } catch (e) { console.error('Erreur welcome handler', e) }
  })

  // save auth state periodically
  setInterval(()=> saveState(), 10000)
}

// Simple health endpoint and minimal admin API for hosting platforms
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.get('/health', (req, res) => res.json({ ok: true }))

// admin static
app.use('/admin', express.static('./src/admin'))

// admin middleware and file upload
const multer = require('multer')
const upload = multer({ dest: './tmp' })
function requireAdmin(req, res, next) {
  try {
    const d = load()
    const token = d.security && d.security.adminToken
    const provided = req.headers['x-admin-token'] || req.query.token || (req.body && req.body.token)
    if (!token) return res.status(403).json({ error: 'admin token not configured' })
    if (!provided || provided !== token) return res.status(401).json({ error: 'invalid token' })
    return next()
  } catch (e) { return res.status(500).json({ error: 'server error' }) }
}

// simple admin endpoints (read-only where appropriate)
// admin token middleware
function requireAdminToken(req, res, next) {
  const d = load()
  const token = process.env.ADMIN_TOKEN || (d.security && d.security.adminToken)
  if (!token) return res.status(403).json({ error: 'admin token not set' })
  const provided = req.headers['x-admin-token']
  if (!provided || provided !== token) return res.status(403).json({ error: 'invalid admin token' })
  next()
}

app.get('/admin/status', requireAdminToken, (req, res) => {
  const d = load()
  res.json({ bot: d.bot || {}, sessions: fs.existsSync('./sessions') ? fs.readdirSync('./sessions') : [] })
})
app.get('/admin/owners', requireAdminToken, (req, res) => {
  const d = load()
  res.json({ owners: d.owners || [] })
})

// QR status endpoint - returns whether a QR image exists and last generation timestamp
app.get('/admin/qr-status', requireAdminToken, (req, res) => {
  const exists = fs.existsSync('./qr.png')
  res.json({
    qr: exists,
    qrPath: exists ? '/qr.png' : null,
    lastGenerated: lastQrGeneratedAt,
    connected: (sockRef && sockRef.user) ? true : false
  })
})

// Return structured commands list for admin UI
app.get('/admin/commands', requireAdminToken, (req, res) => {
  try {
    if (!commandsRef) return res.json({ commands: [] })
    const seen = new Set()
    const arr = []
    for (const cmd of commandsRef.values()) {
      if (!cmd || !cmd.name || seen.has(cmd.name)) continue
      seen.add(cmd.name)
      arr.push({ name: cmd.name, description: cmd.description || '', usage: cmd.usage || '', category: cmd.category || 'General' })
    }
    // group by category
    const grouped = arr.reduce((acc, c) => { acc[c.category] = acc[c.category] || []; acc[c.category].push(c); return acc }, {})
    res.json({ commands: grouped })
  } catch (e) { res.status(500).json({ error: 'server error' }) }
})

// owners add/remove
app.post('/admin/owners/add', requireAdmin, (req, res) => {
  const num = req.body && req.body.number
  if (!num) return res.status(400).json({ error: 'number required' })
  const { addOwner } = require('./lib/auth')
  addOwner(num)
  res.json({ ok: true })
})
app.post('/admin/owners/remove', requireAdmin, (req, res) => {
  const num = req.body && req.body.number
  if (!num) return res.status(400).json({ error: 'number required' })
  const { removeOwner } = require('./lib/auth')
  removeOwner(num)
  res.json({ ok: true })
})

// sessions list / delete
app.get('/admin/sessions', requireAdmin, (req, res) => {
  const dir = './sessions'
  if (!fs.existsSync(dir)) return res.json({ sessions: [] })
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.json')||f.endsWith('.db')||f.endsWith('.dat'))
  res.json({ sessions: files })
})
app.delete('/admin/sessions/:file', requireAdmin, (req, res) => {
  const file = req.params.file
  if (!file || file.includes('..')) return res.status(400).json({ error: 'invalid filename' })
  const full = path.join('./sessions', file)
  if (!fs.existsSync(full)) return res.status(404).json({ error: 'not found' })
  try { fs.unlinkSync(full); return res.json({ ok: true }) } catch (e) { return res.status(500).json({ error: 'delete failed' }) }
})

// cleartmp
app.post('/admin/cleartmp', requireAdmin, (req, res) => {
  const dir = './tmp'
  if (!fs.existsSync(dir)) return res.json({ ok: true, deleted: 0 })
  const files = fs.readdirSync(dir)
  let count = 0
  for (const f of files) { try { fs.unlinkSync(path.join(dir,f)); count++ } catch (e) {} }
  res.json({ ok: true, deleted: count })
})

// set bot name
app.post('/admin/set-bot-name', requireAdmin, (req, res) => {
  const name = req.body && req.body.name
  if (!name) return res.status(400).json({ error: 'name required' })
  const d = load()
  d.bot = d.bot || {}
  d.bot.name = name
  save(d)
  res.json({ ok: true })
})

// upload command image
app.post('/admin/upload-cmd-image', requireAdmin, upload.single('image'), (req, res) => {
  const cmd = req.body && req.body.command
  if (!cmd) return res.status(400).json({ error: 'command required' })
  if (!req.file) return res.status(400).json({ error: 'image required' })
  try {
    const dest = path.join(__dirname, 'assets', `${cmd}.png`)
    fs.renameSync(req.file.path, dest)
    res.json({ ok: true })
  } catch (e) { res.status(500).json({ error: 'save failed' }) }
})

app.listen(PORT, ()=> console.log(`Health & Admin listening on ${PORT}`))

start().catch(e => console.error('Erreur démarrage', e))
