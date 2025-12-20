module.exports = {
  name: 'games_063',
  description: 'Squelette de commande (games) #63',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_063 non implémentée.' }, { quoted: msg })
  }
}
