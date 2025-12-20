const { load, save } = require('../lib/data')
module.exports = {
  name: 'goodbye',
  description: "Définir message d'au revoir: !goodbye Au revoir {user}",
  exec: async ({ sock, msg, args }) => {
    const data = load()
    data.groupSettings = data.groupSettings || {}
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Uniquement pour groupes.' }, { quoted: msg })
    const text = args.join(' ')
    if (!text) return await sock.sendMessage(jid, { text: 'Usage: !goodbye Au revoir {user}' }, { quoted: msg })
    data.groupSettings[jid] = data.groupSettings[jid] || {}
    data.groupSettings[jid].goodbye = text
    save(data)
    await sock.sendMessage(jid, { text: 'Message d\'au revoir défini.' }, { quoted: msg })
  }
}
