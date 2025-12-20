module.exports = {
  name: 'media_269',
  description: 'Squelette de commande (media) #269',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media_269 non implémentée.' }, { quoted: msg })
  }
}
