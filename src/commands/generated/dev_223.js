module.exports = {
  name: 'dev_223',
  description: 'Squelette de commande (dev) #223',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_223 non implémentée.' }, { quoted: msg })
  }
}
