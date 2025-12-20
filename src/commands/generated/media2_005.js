module.exports = {
  name: 'media2_005',
  description: 'Squelette de commande (media2) #5',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_005 non implémentée.' }, { quoted: msg })
  }
}
