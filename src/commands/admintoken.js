const crypto = require('crypto')
const { load, save } = require('../lib/data')
const { isOwner } = require('../lib/auth')

module.exports = {
  name: 'admintoken',
  description: 'Gérer le token admin (owner only): !admintoken set|show|clear',
  exec: async ({ sock, msg, args }) => {
    const caller = msg.key.participant || msg.key.remoteJid
    if (!isOwner(caller)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Réservé au propriétaire.' }, { quoted: msg })
    const sub = args[0]
    const d = load()
    d.security = d.security || {}
    if (sub === 'set') {
      const token = crypto.randomBytes(16).toString('hex')
      d.security.adminToken = token
      save(d)
      await sock.sendMessage(msg.key.remoteJid, { text: `Admin token défini: ${token}\nGarde-le secret et configure la requête HTTP avec header x-admin-token.` }, { quoted: msg })
      return
    }
    if (sub === 'show') {
      const token = d.security.adminToken
      if (!token) return await sock.sendMessage(msg.key.remoteJid, { text: 'Aucun token défini.' }, { quoted: msg })
      // send token privately
      await sock.sendMessage(msg.key.remoteJid, { text: `Admin token: ${token}` }, { quoted: msg })
      return
    }
    if (sub === 'clear') {
      delete d.security.adminToken
      save(d)
      return await sock.sendMessage(msg.key.remoteJid, { text: 'Admin token supprimé.' }, { quoted: msg })
    }
    await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !admintoken set|show|clear' }, { quoted: msg })
  }
}
