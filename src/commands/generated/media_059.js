module.exports = {
  name: 'media_059',
  description: 'Squelette de commande (media) #59',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_059 non implémentée.' }, { quoted: msg })
  }
}
