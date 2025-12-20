module.exports = {
  name: 'nets_194',
  description: 'Squelette de commande (nets) #194',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_194 non implémentée.' }, { quoted: msg })
  }
}
