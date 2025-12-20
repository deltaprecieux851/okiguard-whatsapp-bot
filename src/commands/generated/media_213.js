module.exports = {
  name: 'media_213',
  description: 'Squelette de commande (media) #213',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_213 non implémentée.' }, { quoted: msg })
  }
}
