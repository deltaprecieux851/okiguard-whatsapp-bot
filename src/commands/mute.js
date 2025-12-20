const { load, save } = require('../lib/data')
module.exports = {
  name: 'mute',
  description: 'Met le groupe en silence: !mute on|off',
  exec: async ({ sock, msg, args }) => {
    const data = load()
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Uniquement pour groupes.' }, { quoted: msg })
    const sub = args[0]
    if (!sub || !['on','off'].includes(sub)) return await sock.sendMessage(jid, { text: 'Usage: !mute on|off' }, { quoted: msg })
    data.groupSettings = data.groupSettings || {}
    data.groupSettings[jid] = data.groupSettings[jid] || {}
    data.groupSettings[jid].muted = sub === 'on'
    save(data)
    await sock.sendMessage(jid, { text: `mute ${sub}` }, { quoted: msg })
  }
}
