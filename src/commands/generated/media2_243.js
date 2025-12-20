module.exports = {
  name: 'media2_243',
  description: 'Squelette de commande (media2) #243',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_243 non implémentée.' }, { quoted: msg })
  }
}
