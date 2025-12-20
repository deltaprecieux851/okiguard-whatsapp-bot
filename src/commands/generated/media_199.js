module.exports = {
  name: 'media_199',
  description: 'Squelette de commande (media) #199',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_199 non implémentée.' }, { quoted: msg })
  }
}
