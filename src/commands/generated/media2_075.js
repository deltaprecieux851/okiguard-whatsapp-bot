module.exports = {
  name: 'media2_075',
  description: 'Squelette de commande (media2) #75',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_075 non implémentée.' }, { quoted: msg })
  }
}
