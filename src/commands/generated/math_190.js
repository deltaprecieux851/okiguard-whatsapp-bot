module.exports = {
  name: 'math_190',
  description: 'Squelette de commande (math) #190',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_190 non implémentée.' }, { quoted: msg })
  }
}
