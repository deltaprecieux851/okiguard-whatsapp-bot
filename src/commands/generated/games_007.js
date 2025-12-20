module.exports = {
  name: 'games_007',
  description: 'Squelette de commande (games) #7',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_007 non implémentée.' }, { quoted: msg })
  }
}
