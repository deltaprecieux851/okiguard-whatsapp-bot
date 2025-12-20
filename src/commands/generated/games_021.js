module.exports = {
  name: 'games_021',
  description: 'Squelette de commande (games) #21',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_021 non implémentée.' }, { quoted: msg })
  }
}
