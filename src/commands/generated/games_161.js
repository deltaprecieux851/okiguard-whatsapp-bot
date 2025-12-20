module.exports = {
  name: 'games_161',
  description: 'Squelette de commande (games) #161',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_161 non implémentée.' }, { quoted: msg })
  }
}
