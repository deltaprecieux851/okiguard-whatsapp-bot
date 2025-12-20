module.exports = {
  name: 'conv_052',
  description: 'Squelette de commande (conv) #52',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_052 non implémentée.' }, { quoted: msg })
  }
}
