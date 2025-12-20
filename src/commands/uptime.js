const start = Date.now()
module.exports = {
  name: 'uptime',
  description: 'Montre le temps d\'activité du bot',
  exec: async ({ sock, msg }) => {
    const diff = Date.now() - start
    const seconds = Math.floor(diff/1000)
    await sock.sendMessage(msg.key.remoteJid, { text: `Uptime: ${seconds}s` }, { quoted: msg })
  }
}
