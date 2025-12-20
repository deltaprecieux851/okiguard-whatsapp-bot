module.exports = {
  name: 'text_247',
  description: 'Squelette de commande (text) #247',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_247 non implémentée.' }, { quoted: msg })
  }
}
