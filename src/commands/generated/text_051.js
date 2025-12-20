module.exports = {
  name: 'text_051',
  description: 'Squelette de commande (text) #51',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_051 non implémentée.' }, { quoted: msg })
  }
}
