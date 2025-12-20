module.exports = {
  name: 'games_035',
  description: 'Squelette de commande (games) #35',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_035 non implémentée.' }, { quoted: msg })
  }
}
