module.exports = {
  name: 'nets_040',
  description: 'Squelette de commande (nets) #40',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_040 non implémentée.' }, { quoted: msg })
  }
}
