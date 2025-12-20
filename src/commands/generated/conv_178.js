module.exports = {
  name: 'conv_178',
  description: 'Squelette de commande (conv) #178',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_178 non implémentée.' }, { quoted: msg })
  }
}
