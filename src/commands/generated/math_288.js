module.exports = {
  name: 'math_288',
  description: 'Squelette de commande (math) #288',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_288 non implémentée.' }, { quoted: msg })
  }
}
