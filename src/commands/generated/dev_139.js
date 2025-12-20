module.exports = {
  name: 'dev_139',
  description: 'Squelette de commande (dev) #139',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_139 non implémentée.' }, { quoted: msg })
  }
}
