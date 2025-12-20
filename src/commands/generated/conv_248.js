module.exports = {
  name: 'conv_248',
  description: 'Squelette de commande (conv) #248',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_248 non implémentée.' }, { quoted: msg })
  }
}
