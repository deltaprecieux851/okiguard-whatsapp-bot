module.exports = {
  name: 'conv_220',
  description: 'Squelette de commande (conv) #220',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_220 non implémentée.' }, { quoted: msg })
  }
}
