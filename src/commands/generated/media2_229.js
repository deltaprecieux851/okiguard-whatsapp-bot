module.exports = {
  name: 'media2_229',
  description: 'Squelette de commande (media2) #229',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_229 non implémentée.' }, { quoted: msg })
  }
}
