module.exports = {
  name: 'conv_080',
  description: 'Squelette de commande (conv) #80',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_080 non implémentée.' }, { quoted: msg })
  }
}
