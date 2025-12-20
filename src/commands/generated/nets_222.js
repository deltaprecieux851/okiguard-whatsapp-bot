module.exports = {
  name: 'nets_222',
  description: 'Squelette de commande (nets) #222',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_222 non implémentée.' }, { quoted: msg })
  }
}
