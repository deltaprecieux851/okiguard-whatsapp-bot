module.exports = {
  name: 'me',
  description: 'Affiche ton identifiant (utile pour parrainage)',
  exec: async ({ sock, msg }) => {
    const sender = msg.key && msg.key.participant ? msg.key.participant : msg.key.remoteJid
    await sock.sendMessage(msg.key.remoteJid, { text: `Ton id: ${sender}` }, { quoted: msg })
  }
}
