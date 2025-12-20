module.exports = {
  name: 'dev_013',
  description: 'Squelette de commande (dev) #13',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_013 non implémentée.' }, { quoted: msg })
  }
}
