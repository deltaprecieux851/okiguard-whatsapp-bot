module.exports = {
  name: 'dev_153',
  description: 'Squelette de commande (dev) #153',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_153 non implémentée.' }, { quoted: msg })
  }
}
