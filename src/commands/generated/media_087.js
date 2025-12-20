module.exports = {
  name: 'media_087',
  description: 'Squelette de commande (media) #87',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_087 non implémentée.' }, { quoted: msg })
  }
}
