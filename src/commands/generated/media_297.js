module.exports = {
  name: 'media_297',
  description: 'Squelette de commande (media) #297',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_297 non implémentée.' }, { quoted: msg })
  }
}
