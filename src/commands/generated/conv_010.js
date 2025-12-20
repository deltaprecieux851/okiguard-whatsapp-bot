module.exports = {
  name: 'conv_010',
  description: 'Squelette de commande (conv) #10',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_010 non implémentée.' }, { quoted: msg })
  }
}
