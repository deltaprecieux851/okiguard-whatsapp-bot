module.exports = {
  name: 'utils_029',
  description: 'Squelette de commande (utils) #29',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_029 non implémentée.' }, { quoted: msg })
  }
}
