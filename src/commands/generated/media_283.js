module.exports = {
  name: 'media_283',
  description: 'Squelette de commande (media) #283',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_283 non implémentée.' }, { quoted: msg })
  }
}
