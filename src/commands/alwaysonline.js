module.exports = {
  name: 'alwaysonline',
  description: 'Active/Désactive always-online. Usage: !alwaysonline on|off',
  exec: async ({ sock, msg, args, config, saveConfig }) => {
    const val = args[0]
    if (!val || !['on','off'].includes(val)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !alwaysonline on|off' }, { quoted: msg })
    config.features.alwaysOnline = val === 'on'
    saveConfig()
    if (config.features.alwaysOnline) {
      try { await sock.presenceSubscribe(msg.key.remoteJid) } catch (e) {}
    }
    await sock.sendMessage(msg.key.remoteJid, { text: `alwaysonline ${config.features.alwaysOnline ? 'activé' : 'désactivé'}` }, { quoted: msg })
  }
}
