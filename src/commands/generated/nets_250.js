module.exports = {
  name: 'nets_250',
  description: 'Squelette de commande (nets) #250',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_250 non implémentée.' }, { quoted: msg })
  }
}
