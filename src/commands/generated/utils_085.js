module.exports = {
  name: 'utils_085',
  description: 'Squelette de commande (utils) #85',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_085 non implémentée.' }, { quoted: msg })
  }
}
