module.exports = {
  name: 'utils_015',
  description: 'Squelette de commande (utils) #15',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_015 non implémentée.' }, { quoted: msg })
  }
}
