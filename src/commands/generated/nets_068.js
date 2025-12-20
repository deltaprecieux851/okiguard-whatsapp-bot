module.exports = {
  name: 'nets_068',
  description: 'Squelette de commande (nets) #68',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_068 non implémentée.' }, { quoted: msg })
  }
}
