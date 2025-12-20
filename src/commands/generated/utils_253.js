module.exports = {
  name: 'utils_253',
  description: 'Squelette de commande (utils) #253',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande utils_253 non implémentée.' }, { quoted: msg })
  }
}
