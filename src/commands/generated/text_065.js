module.exports = {
  name: 'text_065',
  description: 'Squelette de commande (text) #65',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_065 non implémentée.' }, { quoted: msg })
  }
}
