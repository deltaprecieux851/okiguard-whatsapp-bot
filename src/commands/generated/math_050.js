module.exports = {
  name: 'math_050',
  description: 'Squelette de commande (math) #50',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_050 non implémentée.' }, { quoted: msg })
  }
}
