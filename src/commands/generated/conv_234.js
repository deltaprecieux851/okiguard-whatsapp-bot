module.exports = {
  name: 'conv_234',
  description: 'Squelette de commande (conv) #234',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_234 non implémentée.' }, { quoted: msg })
  }
}
