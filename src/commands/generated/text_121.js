module.exports = {
  name: 'text_121',
  description: 'Squelette de commande (text) #121',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_121 non implémentée.' }, { quoted: msg })
  }
}
