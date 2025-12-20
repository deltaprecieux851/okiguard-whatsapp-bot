module.exports = {
  name: 'conv_262',
  description: 'Squelette de commande (conv) #262',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_262 non implémentée.' }, { quoted: msg })
  }
}
