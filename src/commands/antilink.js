const { load, save } = require('../lib/data')
module.exports = {
  name: 'antilink',
  description: 'Activer/désactiver détection de liens dans le groupe: !antilink on|off',
  exec: async ({ sock, msg, args }) => {
    const data = load()
    data.groupSettings = data.groupSettings || {}
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Uniquement pour groupes.' }, { quoted: msg })
    const val = args[0]
    if (!val || !['on','off'].includes(val)) return await sock.sendMessage(jid, { text: 'Usage: !antilink on|off' }, { quoted: msg })
    data.groupSettings[jid] = data.groupSettings[jid] || {}
    data.groupSettings[jid].antilink = val === 'on'
    save(data)
    await sock.sendMessage(jid, { text: `antilink ${val}` }, { quoted: msg })
  }
}
