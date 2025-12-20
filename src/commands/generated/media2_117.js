module.exports = {
  name: 'media2_117',
  description: 'Squelette de commande (media2) #117',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_117 non implémentée.' }, { quoted: msg })
  }
}
