module.exports = {
  name: 'math_036',
  description: 'Squelette de commande (math) #36',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_036 non implémentée.' }, { quoted: msg })
  }
}
