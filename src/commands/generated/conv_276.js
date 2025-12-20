module.exports = {
  name: 'conv_276',
  description: 'Squelette de commande (conv) #276',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_276 non implémentée.' }, { quoted: msg })
  }
}
