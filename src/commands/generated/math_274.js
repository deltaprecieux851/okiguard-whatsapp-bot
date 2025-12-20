module.exports = {
  name: 'math_274',
  description: 'Squelette de commande (math) #274',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_274 non implémentée.' }, { quoted: msg })
  }
}
