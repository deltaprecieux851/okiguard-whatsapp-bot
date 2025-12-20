module.exports = {
  name: 'dev_237',
  description: 'Squelette de commande (dev) #237',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_237 non implémentée.' }, { quoted: msg })
  }
}
