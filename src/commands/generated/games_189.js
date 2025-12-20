module.exports = {
  name: 'games_189',
  description: 'Squelette de commande (games) #189',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_189 non implémentée.' }, { quoted: msg })
  }
}
