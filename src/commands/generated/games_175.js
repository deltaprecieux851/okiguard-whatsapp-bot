module.exports = {
  name: 'games_175',
  description: 'Squelette de commande (games) #175',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_175 non implémentée.' }, { quoted: msg })
  }
}
