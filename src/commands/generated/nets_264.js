module.exports = {
  name: 'nets_264',
  description: 'Squelette de commande (nets) #264',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_264 non implémentée.' }, { quoted: msg })
  }
}
