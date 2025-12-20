module.exports = {
  name: 'conv_122',
  description: 'Squelette de commande (conv) #122',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_122 non implémentée.' }, { quoted: msg })
  }
}
