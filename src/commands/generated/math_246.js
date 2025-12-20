module.exports = {
  name: 'math_246',
  description: 'Squelette de commande (math) #246',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_246 non implémentée.' }, { quoted: msg })
  }
}
