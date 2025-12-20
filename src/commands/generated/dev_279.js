module.exports = {
  name: 'dev_279',
  description: 'Squelette de commande (dev) #279',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_279 non implémentée.' }, { quoted: msg })
  }
}
