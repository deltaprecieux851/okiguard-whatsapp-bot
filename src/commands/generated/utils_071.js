module.exports = {
  name: 'utils_071',
  description: 'Squelette de commande (utils) #71',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_071 non implémentée.' }, { quoted: msg })
  }
}
