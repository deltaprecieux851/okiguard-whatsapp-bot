module.exports = {
  name: 'text_177',
  description: 'Squelette de commande (text) #177',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_177 non implémentée.' }, { quoted: msg })
  }
}
