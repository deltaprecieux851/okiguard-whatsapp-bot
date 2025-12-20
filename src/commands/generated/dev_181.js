module.exports = {
  name: 'dev_181',
  description: 'Squelette de commande (dev) #181',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_181 non implémentée.' }, { quoted: msg })
  }
}
