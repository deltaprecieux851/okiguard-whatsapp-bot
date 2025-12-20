module.exports = {
  name: 'media_227',
  description: 'Squelette de commande (media) #227',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_227 non implémentée.' }, { quoted: msg })
  }
}
