module.exports = {
  name: 'nets_166',
  description: 'Squelette de commande (nets) #166',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_166 non implémentée.' }, { quoted: msg })
  }
}
