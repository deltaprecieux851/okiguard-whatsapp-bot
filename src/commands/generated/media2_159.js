module.exports = {
  name: 'media2_159',
  description: 'Squelette de commande (media2) #159',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_159 non implémentée.' }, { quoted: msg })
  }
}
