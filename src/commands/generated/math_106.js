module.exports = {
  name: 'math_106',
  description: 'Squelette de commande (math) #106',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande math_106 non implémentée.' }, { quoted: msg })
  }
}
