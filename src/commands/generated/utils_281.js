module.exports = {
  name: 'utils_281',
  description: 'Squelette de commande (utils) #281',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_281 non implémentée.' }, { quoted: msg })
  }
}
