module.exports = {
  name: 'text_233',
  description: 'Squelette de commande (text) #233',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_233 non implémentée.' }, { quoted: msg })
  }
}
