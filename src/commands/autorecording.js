module.exports = {
  name: 'autorecording',
  description: 'Active/Désactive auto-recording globally. Usage: !autorecording on|off',
  exec: async ({ sock, msg, args, config, saveConfig }) => {
    const val = args[0]
    if (!val || !['on','off'].includes(val)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !autorecording on|off' }, { quoted: msg })
    config.features.autorecording = val === 'on'
    saveConfig()
    await sock.sendMessage(msg.key.remoteJid, { text: `autorecording ${config.features.autorecording ? 'activé' : 'désactivé'}` }, { quoted: msg })
  }
}
