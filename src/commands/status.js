module.exports = {
  name: 'status',
  description: 'Affiche le statut des fonctionnalités',
  exec: async ({ sock, msg, config }) => {
    const lines = Object.entries(config.features).map(([k,v])=>`${k}: ${v ? 'ON' : 'OFF'}`)
    await sock.sendMessage(msg.key.remoteJid, { text: `Statut des fonctionnalités:\n${lines.join('\n')}` }, { quoted: msg })
  }
}
