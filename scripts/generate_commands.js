#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const COUNT = Number(process.argv[2] || 300)
const OUT_DIR = path.join(__dirname, '..', 'src', 'commands', 'generated')
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

const categories = [
  'utils','fun','media','admin','media2','info','games','math','text','conv','time','nets','dev','misc'
]

function safeName(s) { return s.replace(/[^a-z0-9_-]/g, '_') }

// don't overwrite existing commands in top-level commands dir
const existing = new Set(fs.readdirSync(path.join(__dirname, '..', 'src', 'commands')).filter(f=>f.endsWith('.js')))

let created = 0
let idx = 1
while (created < COUNT) {
  const cat = categories[(idx-1) % categories.length]
  const name = `${cat}_${String(idx).padStart(3,'0')}`
  const filename = `${safeName(name)}.js`
  const fullpath = path.join(OUT_DIR, filename)
  if (existing.has(`${name}.js`)) { idx++; continue }
  if (fs.existsSync(fullpath)) { idx++; continue }

  const content = `module.exports = {
  name: '${name}',
  description: 'Squelette de commande (${cat}) #${idx}',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande ${name} non implémentée.' }, { quoted: msg })
  }
}
`
  fs.writeFileSync(fullpath, content)
  created++
  idx++
}

// create README for generated commands
const list = fs.readdirSync(OUT_DIR).filter(f=>f.endsWith('.js')).sort()
const md = `# Commandes générées\n\nTotal: ${list.length}\n\n` + list.map(f=>`- ${f}`).join('\n')
fs.writeFileSync(path.join(OUT_DIR, 'README.md'), md)

console.log(`Généré ${created} commandes dans ${OUT_DIR}`)
