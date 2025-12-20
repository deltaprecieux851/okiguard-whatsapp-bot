module.exports = {
  name: 'utils_267',
  description: 'Squelette de commande (utils) #267',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_267 non implémentée.' }, { quoted: msg })
  }
}
