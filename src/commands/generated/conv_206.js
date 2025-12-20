module.exports = {
  name: 'conv_206',
  description: 'Squelette de commande (conv) #206',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_206 non implémentée.' }, { quoted: msg })
  }
}
