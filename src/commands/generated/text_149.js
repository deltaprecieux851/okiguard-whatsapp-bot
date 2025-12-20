module.exports = {
  name: 'text_149',
  description: 'Squelette de commande (text) #149',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_149 non implémentée.' }, { quoted: msg })
  }
}
