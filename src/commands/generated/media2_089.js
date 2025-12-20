module.exports = {
  name: 'media2_089',
  description: 'Squelette de commande (media2) #89',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_089 non implémentée.' }, { quoted: msg })
  }
}
