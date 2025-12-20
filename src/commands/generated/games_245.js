module.exports = {
  name: 'games_245',
  description: 'Squelette de commande (games) #245',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_245 non implémentée.' }, { quoted: msg })
  }
}
