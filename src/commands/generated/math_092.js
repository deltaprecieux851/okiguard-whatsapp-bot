module.exports = {
  name: 'math_092',
  description: 'Squelette de commande (math) #92',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_092 non implémentée.' }, { quoted: msg })
  }
}
