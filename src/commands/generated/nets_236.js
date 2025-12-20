module.exports = {
  name: 'nets_236',
  description: 'Squelette de commande (nets) #236',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_236 non implémentée.' }, { quoted: msg })
  }
}
