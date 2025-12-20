module.exports = {
  name: 'nets_110',
  description: 'Squelette de commande (nets) #110',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_110 non implémentée.' }, { quoted: msg })
  }
}
