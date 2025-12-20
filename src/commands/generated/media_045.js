module.exports = {
  name: 'media_045',
  description: 'Squelette de commande (media) #45',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_045 non implémentée.' }, { quoted: msg })
  }
}
