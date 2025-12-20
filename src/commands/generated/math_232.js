module.exports = {
  name: 'math_232',
  description: 'Squelette de commande (math) #232',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_232 non implémentée.' }, { quoted: msg })
  }
}
