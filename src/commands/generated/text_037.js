module.exports = {
  name: 'text_037',
  description: 'Squelette de commande (text) #37',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_037 non implémentée.' }, { quoted: msg })
  }
}
