module.exports = {
  name: 'media2_103',
  description: 'Squelette de commande (media2) #103',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_103 non implémentée.' }, { quoted: msg })
  }
}
