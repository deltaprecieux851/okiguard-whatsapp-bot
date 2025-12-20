module.exports = {
  name: 'utils_295',
  description: 'Squelette de commande (utils) #295',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_295 non implémentée.' }, { quoted: msg })
  }
}
