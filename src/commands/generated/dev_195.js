module.exports = {
  name: 'dev_195',
  description: 'Squelette de commande (dev) #195',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_195 non implémentée.' }, { quoted: msg })
  }
}
