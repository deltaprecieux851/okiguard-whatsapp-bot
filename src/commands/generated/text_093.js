module.exports = {
  name: 'text_093',
  description: 'Squelette de commande (text) #93',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_093 non implémentée.' }, { quoted: msg })
  }
}
