module.exports = {
  name: 'math_064',
  description: 'Squelette de commande (math) #64',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_064 non implémentée.' }, { quoted: msg })
  }
}
