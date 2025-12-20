module.exports = {
  name: 'utils_197',
  description: 'Squelette de commande (utils) #197',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_197 non implémentée.' }, { quoted: msg })
  }
}
