module.exports = {
  name: 'conv_108',
  description: 'Squelette de commande (conv) #108',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_108 non implémentée.' }, { quoted: msg })
  }
}
