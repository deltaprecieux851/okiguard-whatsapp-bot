module.exports = {
  name: 'media2_061',
  description: 'Squelette de commande (media2) #61',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_061 non implémentée.' }, { quoted: msg })
  }
}
