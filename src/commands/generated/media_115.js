module.exports = {
  name: 'media_115',
  description: 'Squelette de commande (media) #115',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_115 non implémentée.' }, { quoted: msg })
  }
}
