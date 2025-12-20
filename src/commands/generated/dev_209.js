module.exports = {
  name: 'dev_209',
  description: 'Squelette de commande (dev) #209',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_209 non implémentée.' }, { quoted: msg })
  }
}
