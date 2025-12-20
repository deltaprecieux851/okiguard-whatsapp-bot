module.exports = {
  name: 'text_261',
  description: 'Squelette de commande (text) #261',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_261 non implémentée.' }, { quoted: msg })
  }
}
