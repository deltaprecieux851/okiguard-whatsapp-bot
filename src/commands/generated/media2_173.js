module.exports = {
  name: 'media2_173',
  description: 'Squelette de commande (media2) #173',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_173 non implémentée.' }, { quoted: msg })
  }
}
