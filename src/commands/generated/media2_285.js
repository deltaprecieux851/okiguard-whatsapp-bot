module.exports = {
  name: 'media2_285',
  description: 'Squelette de commande (media2) #285',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_285 non implémentée.' }, { quoted: msg })
  }
}
