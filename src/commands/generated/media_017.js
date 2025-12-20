module.exports = {
  name: 'media_017',
  description: 'Squelette de commande (media) #17',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_017 non implémentée.' }, { quoted: msg })
  }
}
