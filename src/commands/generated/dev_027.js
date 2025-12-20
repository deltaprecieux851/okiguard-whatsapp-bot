module.exports = {
  name: 'dev_027',
  description: 'Squelette de commande (dev) #27',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_027 non implémentée.' }, { quoted: msg })
  }
}
