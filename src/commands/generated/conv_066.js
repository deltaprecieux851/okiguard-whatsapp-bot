module.exports = {
  name: 'conv_066',
  description: 'Squelette de commande (conv) #66',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_066 non implémentée.' }, { quoted: msg })
  }
}
