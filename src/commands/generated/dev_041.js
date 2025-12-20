module.exports = {
  name: 'dev_041',
  description: 'Squelette de commande (dev) #41',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_041 non implémentée.' }, { quoted: msg })
  }
}
