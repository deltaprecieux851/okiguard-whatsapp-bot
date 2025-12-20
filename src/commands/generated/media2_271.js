module.exports = {
  name: 'media2_271',
  description: 'Squelette de commande (media2) #271',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_271 non implémentée.' }, { quoted: msg })
  }
}
