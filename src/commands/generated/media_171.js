module.exports = {
  name: 'media_171',
  description: 'Squelette de commande (media) #171',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_171 non implémentée.' }, { quoted: msg })
  }
}
