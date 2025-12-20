module.exports = {
  name: 'math_008',
  description: 'Squelette de commande (math) #8',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_008 non implémentée.' }, { quoted: msg })
  }
}
