module.exports = {
  name: 'games_287',
  description: 'Squelette de commande (games) #287',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_287 non implémentée.' }, { quoted: msg })
  }
}
