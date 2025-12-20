module.exports = {
  name: 'math_204',
  description: 'Squelette de commande (math) #204',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_204 non implémentée.' }, { quoted: msg })
  }
}
