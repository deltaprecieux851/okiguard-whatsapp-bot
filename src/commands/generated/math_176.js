module.exports = {
  name: 'math_176',
  description: 'Squelette de commande (math) #176',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_176 non implémentée.' }, { quoted: msg })
  }
}
