const { load, save } = require('../lib/data')
const { isOwner } = require('../lib/auth')
module.exports = {
  name: 'mode',
  description: 'Set bot mode: !mode public|private',
  exec: async ({ sock, msg, args }) => {
    const caller = msg.key.participant || msg.key.remoteJid
    if (!isOwner(caller)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Réservé au propriétaire.' }, { quoted: msg })
    const arg = args[0]
    if (!arg || !['public','private'].includes(arg)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !mode public|private' }, { quoted: msg })
    const data = load()
    data.bot = data.bot || {}
    data.bot.mode = arg
    save(data)
    await sock.sendMessage(msg.key.remoteJid, { text: `Mode mis à jour: ${arg}` }, { quoted: msg })
  }
}
