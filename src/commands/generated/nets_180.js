module.exports = {
  name: 'nets_180',
  description: 'Squelette de commande (nets) #180',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_180 non implémentée.' }, { quoted: msg })
  }
}
