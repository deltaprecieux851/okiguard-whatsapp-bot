module.exports = {
  name: 'media_003',
  description: 'Squelette de commande (media) #3',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_003 non implémentée.' }, { quoted: msg })
  }
}
