module.exports = {
  name: 'media_185',
  description: 'Squelette de commande (media) #185',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_185 non implémentée.' }, { quoted: msg })
  }
}
