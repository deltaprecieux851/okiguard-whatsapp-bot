const fs = require('fs')
const path = require('path')
const { isOwner } = require('../lib/auth')

module.exports = {
  name: 'clearcmdimg',
  description: 'Supprimer l\'image d\'une commande (owner only). Usage: !clearcmdimg <command>',
  exec: async ({ sock, msg, args }) => {
    const caller = msg.key.participant || msg.key.remoteJid
    if (!isOwner(caller)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Réservé au propriétaire.' }, { quoted: msg })
    const cmd = args[0]
    if (!cmd) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !clearcmdimg <command>' }, { quoted: msg })
    const outPath = path.join(__dirname, '..', 'assets', `${cmd}.png`)
    if (!fs.existsSync(outPath)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Aucune image trouvée pour cette commande.' }, { quoted: msg })
    try { fs.unlinkSync(outPath); await sock.sendMessage(msg.key.remoteJid, { text: 'Image supprimée.' }, { quoted: msg }) } catch (e) { await sock.sendMessage(msg.key.remoteJid, { text: 'Impossible de supprimer.' }, { quoted: msg }) }
  }
}
