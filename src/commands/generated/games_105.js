module.exports = {
  name: 'games_105',
  description: 'Squelette de commande (games) #105',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_105 non implémentée.' }, { quoted: msg })
  }
}
