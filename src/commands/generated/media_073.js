module.exports = {
  name: 'media_073',
  description: 'Squelette de commande (media) #73',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_073 non implémentée.' }, { quoted: msg })
  }
}
