const { load, save } = require('../lib/data')
module.exports = {
  name: 'warn',
  description: 'Avertir un utilisateur (usage: !warn +num raison)',
  exec: async ({ sock, msg, args }) => {
    const data = load()
    data.warns = data.warns || {}
    const targetRaw = args[0]
    if (!targetRaw) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !warn +243xxxxxxx raison' }, { quoted: msg })
    const jid = `${targetRaw.replace(/\D/g,'')}@s.whatsapp.net`
    const reason = args.slice(1).join(' ') || 'Avertissement'
    data.warns[jid] = (data.warns[jid] || 0) + 1
    save(data)
    await sock.sendMessage(msg.key.remoteJid, { text: `${jid} averti. Total: ${data.warns[jid]}. Raison: ${reason}` }, { quoted: msg })
  }
}
