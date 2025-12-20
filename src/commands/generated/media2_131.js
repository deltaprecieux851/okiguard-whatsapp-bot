module.exports = {
  name: 'media2_131',
  description: 'Squelette de commande (media2) #131',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_131 non implémentée.' }, { quoted: msg })
  }
}
