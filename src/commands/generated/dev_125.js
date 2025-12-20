module.exports = {
  name: 'dev_125',
  description: 'Squelette de commande (dev) #125',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_125 non implémentée.' }, { quoted: msg })
  }
}
