module.exports = {
  name: 'conv_164',
  description: 'Squelette de commande (conv) #164',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_164 non implémentée.' }, { quoted: msg })
  }
}
