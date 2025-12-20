module.exports = {
  name: 'conv_024',
  description: 'Squelette de commande (conv) #24',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande conv_024 non implémentée.' }, { quoted: msg })
  }
}
