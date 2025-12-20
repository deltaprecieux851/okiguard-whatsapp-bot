module.exports = {
  name: 'media2_033',
  description: 'Squelette de commande (media2) #33',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_033 non implémentée.' }, { quoted: msg })
  }
}
