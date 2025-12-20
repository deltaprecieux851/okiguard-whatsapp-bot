module.exports = {
  name: 'antivoince',
  description: 'Active/Désactive le blocage des messages vocaux. Usage: !antivoince on|off',
  exec: async ({ sock, msg, args, config, saveConfig }) => {
    const val = args[0]
    if (!val || !['on','off'].includes(val)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !antivoince on|off' }, { quoted: msg })
    config.features.antivoince = val === 'on'
    saveConfig()
    await sock.sendMessage(msg.key.remoteJid, { text: `antivoince ${config.features.antivoince ? 'activé' : 'désactivé'}` }, { quoted: msg })
  }
}
