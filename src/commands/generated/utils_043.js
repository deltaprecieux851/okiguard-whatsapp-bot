module.exports = {
  name: 'utils_043',
  description: 'Squelette de commande (utils) #43',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_043 non implémentée.' }, { quoted: msg })
  }
}
