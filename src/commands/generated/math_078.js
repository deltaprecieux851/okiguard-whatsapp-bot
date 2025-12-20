module.exports = {
  name: 'math_078',
  description: 'Squelette de commande (math) #78',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_078 non implémentée.' }, { quoted: msg })
  }
}
