const { load, save } = require('../lib/data')
module.exports = {
  name: 'welcome',
  description: 'Définir message de bienvenue du groupe: !welcome Le message {user} sera remplacé',
  exec: async ({ sock, msg, args }) => {
    const data = load()
    data.groupSettings = data.groupSettings || {}
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Uniquement pour groupes.' }, { quoted: msg })
    const text = args.join(' ')
    if (!text) return await sock.sendMessage(jid, { text: 'Usage: !welcome Bienvenue {user}' }, { quoted: msg })
    data.groupSettings[jid] = data.groupSettings[jid] || {}
    data.groupSettings[jid].welcome = text
    save(data)
    await sock.sendMessage(jid, { text: 'Message de bienvenue défini.' }, { quoted: msg })
  }
}
