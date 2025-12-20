module.exports = {
  name: 'utils_057',
  description: 'Squelette de commande (utils) #57',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_057 non implémentée.' }, { quoted: msg })
  }
}
