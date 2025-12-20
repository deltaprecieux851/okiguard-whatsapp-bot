module.exports = {
  name: 'dev_111',
  description: 'Squelette de commande (dev) #111',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_111 non implémentée.' }, { quoted: msg })
  }
}
