module.exports = {
  name: 'utils_001',
  description: 'Squelette de commande (utils) #1',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_001 non implémentée.' }, { quoted: msg })
  }
}
