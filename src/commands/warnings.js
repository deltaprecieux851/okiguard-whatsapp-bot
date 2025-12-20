const { load } = require('../lib/data')
module.exports = {
  name: 'warnings',
  description: 'Afficher le nombre d\'avertissements d\'un user (usage: !warnings +num)',
  exec: async ({ sock, msg, args }) => {
    const data = load()
    data.warns = data.warns || {}
    const targetRaw = args[0]
    if (!targetRaw) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !warnings +243xxxxxxx' }, { quoted: msg })
    const jid = `${targetRaw.replace(/\D/g,'')}@s.whatsapp.net`
    const count = data.warns[jid] || 0
    await sock.sendMessage(msg.key.remoteJid, { text: `${jid} a ${count} avertissements.` }, { quoted: msg })
  }
}
