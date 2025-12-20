const { isOwner, addOwner, removeOwner } = require('../lib/auth')
const { load, save } = require('../lib/data')

module.exports = {
  name: 'owner',
  description: 'Gestion des propriétaires: owner add|remove|list|setname',
  exec: async ({ sock, msg, args }) => {
    const caller = msg.key.participant || msg.key.remoteJid
    if (!isOwner(caller)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Réservé au propriétaire.' }, { quoted: msg })
    const sub = args[0]
    if (!sub) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !owner add|remove|list|setname' }, { quoted: msg })
    if (sub === 'list') {
      const d = load()
      const owners = d.owners || []
      return await sock.sendMessage(msg.key.remoteJid, { text: `Propriétaires: \n${owners.join('\n')}` }, { quoted: msg })
    }
    if (sub === 'add') {
      const num = args[1]
      if (!num) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !owner add +243xxxxxxx' }, { quoted: msg })
      const ok = addOwner(num)
      return await sock.sendMessage(msg.key.remoteJid, { text: ok ? 'Propriétaire ajouté.' : 'Déjà propriétaire.' }, { quoted: msg })
    }
    if (sub === 'remove') {
      const num = args[1]
      if (!num) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !owner remove +243xxxxxxx' }, { quoted: msg })
      const ok = removeOwner(num)
      return await sock.sendMessage(msg.key.remoteJid, { text: ok ? 'Propriétaire retiré.' : 'Non trouvé.' }, { quoted: msg })
    }
    if (sub === 'setname') {
      const name = args.slice(1).join(' ')
      if (!name) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !owner setname <nom>' }, { quoted: msg })
      const d = load()
      d.bot = d.bot || {}
      d.bot.name = name
      save(d)
      return await sock.sendMessage(msg.key.remoteJid, { text: `Nom du bot changé en: ${name}` }, { quoted: msg })
    }
    if (sub === 'settoken') {
      const token = args[1]
      if (!token) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !owner settoken <token>' }, { quoted: msg })
      const d = load()
      d.security = d.security || {}
      d.security.adminToken = token
      save(d)
      return await sock.sendMessage(msg.key.remoteJid, { text: 'Token admin mis à jour.' }, { quoted: msg })
    }
    await sock.sendMessage(msg.key.remoteJid, { text: 'Action inconnue.' }, { quoted: msg })
  }
}
