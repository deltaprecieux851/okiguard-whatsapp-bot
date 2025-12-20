const { load, save } = require('../lib/data')
module.exports = {
  name: 'unban',
  description: 'Retirer un user de la banlist',
  exec: async ({ sock, msg, args }) => {
    const data = load()
    data.banned = data.banned || []
    const target = args[0]
    if (!target) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !unban +243xxxxxxx' }, { quoted: msg })
    const jid = `${target.replace(/\D/g,'')}@s.whatsapp.net`
    data.banned = data.banned.filter(x => x !== jid)
    save(data)
    await sock.sendMessage(msg.key.remoteJid, { text: `Utilisateur unbanni: ${jid}` }, { quoted: msg })
  }
}
