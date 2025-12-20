module.exports = {
  name: 'utils_127',
  description: 'Squelette de commande (utils) #127',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_127 non implémentée.' }, { quoted: msg })
  }
}
