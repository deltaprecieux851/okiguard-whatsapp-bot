module.exports = {
  name: 'games_133',
  description: 'Squelette de commande (games) #133',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_133 non implémentée.' }, { quoted: msg })
  }
}
