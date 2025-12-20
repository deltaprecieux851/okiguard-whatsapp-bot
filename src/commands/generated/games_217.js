module.exports = {
  name: 'games_217',
  description: 'Squelette de commande (games) #217',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_217 non implémentée.' }, { quoted: msg })
  }
}
