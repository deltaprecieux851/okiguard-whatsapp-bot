module.exports = {
  name: 'media2_299',
  description: 'Squelette de commande (media2) #299',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_299 non implémentée.' }, { quoted: msg })
  }
}
