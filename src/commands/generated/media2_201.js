module.exports = {
  name: 'media2_201',
  description: 'Squelette de commande (media2) #201',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_201 non implémentée.' }, { quoted: msg })
  }
}
