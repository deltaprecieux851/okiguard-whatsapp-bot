module.exports = {
  name: 'utils_113',
  description: 'Squelette de commande (utils) #113',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_113 non implémentée.' }, { quoted: msg })
  }
}
