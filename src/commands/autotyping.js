module.exports = {
  name: 'autotyping',
  description: 'Active/Désactive auto-typing globally. Usage: !autotyping on|off',
  exec: async ({ sock, msg, args, config, saveConfig }) => {
    const val = args[0]
    if (!val || !['on','off'].includes(val)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !autotyping on|off' }, { quoted: msg })
    config.features.autotyping = val === 'on'
    saveConfig()
    await sock.sendMessage(msg.key.remoteJid, { text: `autotyping ${config.features.autotyping ? 'activé' : 'désactivé'}` }, { quoted: msg })
  }
}
