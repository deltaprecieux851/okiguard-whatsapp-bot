module.exports = {
  name: 'utils_099',
  description: 'Squelette de commande (utils) #99',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_099 non implémentée.' }, { quoted: msg })
  }
}
