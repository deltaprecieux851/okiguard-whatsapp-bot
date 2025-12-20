module.exports = {
  name: 'text_163',
  description: 'Squelette de commande (text) #163',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_163 non implémentée.' }, { quoted: msg })
  }
}
