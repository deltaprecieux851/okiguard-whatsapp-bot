module.exports = {
  name: 'dev_167',
  description: 'Squelette de commande (dev) #167',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_167 non implémentée.' }, { quoted: msg })
  }
}
