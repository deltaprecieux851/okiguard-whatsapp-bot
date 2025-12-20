module.exports = {
  name: 'conv_136',
  description: 'Squelette de commande (conv) #136',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_136 non implémentée.' }, { quoted: msg })
  }
}
