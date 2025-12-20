module.exports = {
  name: 'math_260',
  description: 'Squelette de commande (math) #260',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_260 non implémentée.' }, { quoted: msg })
  }
}
