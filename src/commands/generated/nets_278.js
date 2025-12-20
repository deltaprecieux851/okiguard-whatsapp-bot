module.exports = {
  name: 'nets_278',
  description: 'Squelette de commande (nets) #278',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_278 non implémentée.' }, { quoted: msg })
  }
}
