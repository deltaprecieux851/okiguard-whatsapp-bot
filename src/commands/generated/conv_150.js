module.exports = {
  name: 'conv_150',
  description: 'Squelette de commande (conv) #150',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_150 non implémentée.' }, { quoted: msg })
  }
}
