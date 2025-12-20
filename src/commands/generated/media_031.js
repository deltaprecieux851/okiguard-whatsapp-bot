module.exports = {
  name: 'media_031',
  description: 'Squelette de commande (media) #31',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_031 non implémentée.' }, { quoted: msg })
  }
}
