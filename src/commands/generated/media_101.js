module.exports = {
  name: 'media_101',
  description: 'Squelette de commande (media) #101',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_101 non implémentée.' }, { quoted: msg })
  }
}
