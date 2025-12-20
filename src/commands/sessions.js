const fs = require('fs')
const path = require('path')
const { isOwner } = require('../lib/auth')

module.exports = {
  name: 'sessions',
  description: 'Lister / kill les sessions sauvegardées (owner only). Usage: !sessions list | !sessions kill <file>',
  exec: async ({ sock, msg, args }) => {
    const caller = msg.key.participant || msg.key.remoteJid
    if (!isOwner(caller)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Réservé au propriétaire.' }, { quoted: msg })
    const sub = args[0]
    const dir = path.join(__dirname, '..', '..', 'sessions')
    if (sub === 'list') {
      if (!fs.existsSync(dir)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Aucune session.' }, { quoted: msg })
      const files = fs.readdirSync(dir).filter(f=>f.endsWith('.json')||f.endsWith('.db')||f.endsWith('.dat'))
      return await sock.sendMessage(msg.key.remoteJid, { text: 'Sessions:\n' + (files.length ? files.join('\n') : 'Aucune') }, { quoted: msg })
    }
    if (sub === 'kill') {
      const file = args[1]
      if (!file) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !sessions kill <file>' }, { quoted: msg })
      const full = path.join(dir, file)
      if (!fs.existsSync(full)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Fichier introuvable.' }, { quoted: msg })
      try { fs.unlinkSync(full); return await sock.sendMessage(msg.key.remoteJid, { text: 'Session supprimée.' }, { quoted: msg }) } catch (e) { return await sock.sendMessage(msg.key.remoteJid, { text: 'Impossible de supprimer.' }, { quoted: msg }) }
    }
    await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !sessions list | !sessions kill <file>' }, { quoted: msg })
  }
}
