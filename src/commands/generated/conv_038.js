module.exports = {
  name: 'conv_038',
  description: 'Squelette de commande (conv) #38',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_038 non implémentée.' }, { quoted: msg })
  }
}
