module.exports = {
  name: 'media_143',
  description: 'Squelette de commande (media) #143',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_143 non implémentée.' }, { quoted: msg })
  }
}
