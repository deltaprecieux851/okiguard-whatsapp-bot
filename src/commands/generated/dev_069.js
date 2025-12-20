module.exports = {
  name: 'dev_069',
  description: 'Squelette de commande (dev) #69',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_069 non implémentée.' }, { quoted: msg })
  }
}
