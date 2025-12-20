module.exports = {
  name: 'utils_183',
  description: 'Squelette de commande (utils) #183',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_183 non implémentée.' }, { quoted: msg })
  }
}
