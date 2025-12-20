module.exports = {
  name: 'dev_265',
  description: 'Squelette de commande (dev) #265',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_265 non implémentée.' }, { quoted: msg })
  }
}
