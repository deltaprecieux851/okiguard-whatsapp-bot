const { load, save } = require('../lib/data')
module.exports = {
  name: 'ban',
  description: 'Bannir un utilisateur (ajout au banlist interne)',
  exec: async ({ sock, msg, args }) => {
    const data = load()
    data.banned = data.banned || []
    const target = args[0]
    if (!target) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !ban +243xxxxxxx' }, { quoted: msg })
    const jid = `${target.replace(/\D/g,'')}@s.whatsapp.net`
    if (data.banned.includes(jid)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Déjà banni.' }, { quoted: msg })
    data.banned.push(jid)
    save(data)
    await sock.sendMessage(msg.key.remoteJid, { text: `Utilisateur banni: ${jid}` }, { quoted: msg })
  }
}
