module.exports = {
  name: 'media_129',
  description: 'Squelette de commande (media) #129',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_129 non implémentée.' }, { quoted: msg })
  }
}
