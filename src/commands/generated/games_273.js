module.exports = {
  name: 'games_273',
  description: 'Squelette de commande (games) #273',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_273 non implémentée.' }, { quoted: msg })
  }
}
