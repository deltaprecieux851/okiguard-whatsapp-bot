module.exports = {
  name: 'conv_094',
  description: 'Squelette de commande (conv) #94',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_094 non implémentée.' }, { quoted: msg })
  }
}
