module.exports = {
  name: 'conv_290',
  description: 'Squelette de commande (conv) #290',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_290 non implémentée.' }, { quoted: msg })
  }
}
