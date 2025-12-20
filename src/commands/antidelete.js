const { load, save } = require('../lib/data')
module.exports = {
  name: 'antidelete',
  description: 'Activer/désactiver la récupération des messages supprimés: !antidelete on|off',
  exec: async ({ sock, msg, args }) => {
    const val = args[0]
    if (!val || !['on','off'].includes(val)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !antidelete on|off' }, { quoted: msg })
    const data = load()
    data.features = data.features || {}
    data.features.antidelete = val === 'on'
    save(data)
    await sock.sendMessage(msg.key.remoteJid, { text: `antidelete ${val}` }, { quoted: msg })
  }
}
