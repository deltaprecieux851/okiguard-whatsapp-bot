module.exports = {
  name: 'media_241',
  description: 'Squelette de commande (media) #241',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_241 non implémentée.' }, { quoted: msg })
  }
}
