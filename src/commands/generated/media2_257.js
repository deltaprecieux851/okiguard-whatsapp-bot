module.exports = {
  name: 'media2_257',
  description: 'Squelette de commande (media2) #257',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_257 non implémentée.' }, { quoted: msg })
  }
}
