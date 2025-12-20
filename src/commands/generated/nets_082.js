module.exports = {
  name: 'nets_082',
  description: 'Squelette de commande (nets) #82',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_082 non implémentée.' }, { quoted: msg })
  }
}
