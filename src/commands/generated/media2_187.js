module.exports = {
  name: 'media2_187',
  description: 'Squelette de commande (media2) #187',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_187 non implémentée.' }, { quoted: msg })
  }
}
