module.exports = {
  name: 'media_157',
  description: 'Squelette de commande (media) #157',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_157 non implémentée.' }, { quoted: msg })
  }
}
