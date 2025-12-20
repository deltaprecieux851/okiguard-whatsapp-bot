module.exports = {
  name: 'games_147',
  description: 'Squelette de commande (games) #147',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_147 non implémentée.' }, { quoted: msg })
  }
}
