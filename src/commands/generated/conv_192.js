module.exports = {
  name: 'conv_192',
  description: 'Squelette de commande (conv) #192',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_192 non implémentée.' }, { quoted: msg })
  }
}
