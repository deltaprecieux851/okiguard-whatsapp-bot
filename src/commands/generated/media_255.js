module.exports = {
  name: 'media_255',
  description: 'Squelette de commande (media) #255',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_255 non implémentée.' }, { quoted: msg })
  }
}
