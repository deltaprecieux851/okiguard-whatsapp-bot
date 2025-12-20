module.exports = {
  name: 'media2_019',
  description: 'Squelette de commande (media2) #19',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_019 non implémentée.' }, { quoted: msg })
  }
}
