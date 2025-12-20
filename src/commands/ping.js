module.exports = {
  name: 'ping',
  description: 'Répond pong',
  exec: async ({ sock, msg }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Pong 🏓' }, { quoted: msg })
  }
}
