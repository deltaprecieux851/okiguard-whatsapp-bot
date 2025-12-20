module.exports = {
  name: 'nets_292',
  description: 'Squelette de commande (nets) #292',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_292 non implémentée.' }, { quoted: msg })
  }
}
