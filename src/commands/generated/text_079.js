module.exports = {
  name: 'text_079',
  description: 'Squelette de commande (text) #79',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_079 non implémentée.' }, { quoted: msg })
  }
}
