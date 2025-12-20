module.exports = {
  name: 'media2_145',
  description: 'Squelette de commande (media2) #145',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_145 non implémentée.' }, { quoted: msg })
  }
}
