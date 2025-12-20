module.exports = {
  name: 'nets_124',
  description: 'Squelette de commande (nets) #124',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_124 non implémentée.' }, { quoted: msg })
  }
}
