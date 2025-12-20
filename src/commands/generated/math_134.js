module.exports = {
  name: 'math_134',
  description: 'Squelette de commande (math) #134',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_134 non implémentée.' }, { quoted: msg })
  }
}
