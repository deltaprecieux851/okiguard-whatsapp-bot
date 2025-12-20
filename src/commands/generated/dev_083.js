module.exports = {
  name: 'dev_083',
  description: 'Squelette de commande (dev) #83',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_083 non implémentée.' }, { quoted: msg })
  }
}
