module.exports = {
  name: 'text_275',
  description: 'Squelette de commande (text) #275',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_275 non implémentée.' }, { quoted: msg })
  }
}
