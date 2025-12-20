const fs = require('fs')
module.exports = {
  name: 'clearsession',
  description: 'Supprime la session locale (utiliser avec précaution)',
  exec: async ({ sock, msg }) => {
    try { fs.unlinkSync('./sessions/auth_info.json'); await sock.sendMessage(msg.key.remoteJid, { text: 'Session supprimée. Redémarre le bot pour régénérer QR.' }, { quoted: msg }) } catch (e) { await sock.sendMessage(msg.key.remoteJid, { text: 'Impossible de supprimer session (peut-être introuvable).' }, { quoted: msg }) }
  }
}
