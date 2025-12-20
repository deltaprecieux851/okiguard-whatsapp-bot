module.exports = {
  name: 'nets_152',
  description: 'Squelette de commande (nets) #152',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_152 non implémentée.' }, { quoted: msg })
  }
}
