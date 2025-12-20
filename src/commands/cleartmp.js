const fs = require('fs')
const path = require('path')
const { isOwner } = require('../lib/auth')
module.exports = {
  name: 'cleartmp',
  description: "Supprime les fichiers temporaires téléchargés (owner only)",
  exec: async ({ sock, msg }) => {
    const caller = msg.key.participant || msg.key.remoteJid
    if (!isOwner(caller)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Réservé au propriétaire.' }, { quoted: msg })
    const dir = path.join(__dirname, '..', 'tmp')
    if (!fs.existsSync(dir)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Aucun tmp à nettoyer.' }, { quoted: msg })
    const files = fs.readdirSync(dir)
    for (const f of files) {
      try { fs.unlinkSync(path.join(dir,f)) } catch (e) {}
    }
    await sock.sendMessage(msg.key.remoteJid, { text: `Nettoyé ${files.length} fichiers temporaires.` }, { quoted: msg })
  }
}
