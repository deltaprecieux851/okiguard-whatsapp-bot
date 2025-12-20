module.exports = {
  name: 'nets_012',
  description: 'Squelette de commande (nets) #12',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_012 non implémentée.' }, { quoted: msg })
  }
}
