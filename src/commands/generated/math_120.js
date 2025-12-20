module.exports = {
  name: 'math_120',
  description: 'Squelette de commande (math) #120',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_120 non implémentée.' }, { quoted: msg })
  }
}
