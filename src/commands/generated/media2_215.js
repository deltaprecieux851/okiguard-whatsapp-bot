module.exports = {
  name: 'media2_215',
  description: 'Squelette de commande (media2) #215',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_215 non implémentée.' }, { quoted: msg })
  }
}
