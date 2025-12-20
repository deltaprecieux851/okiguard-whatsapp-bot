module.exports = {
  name: 'time_123',
  description: 'Squelette de commande (time) #123',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande time_123 non implémentée.' }, { quoted: msg })
  }
}
