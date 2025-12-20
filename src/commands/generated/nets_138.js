module.exports = {
  name: 'nets_138',
  description: 'Squelette de commande (nets) #138',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_138 non implémentée.' }, { quoted: msg })
  }
}
