module.exports = {
  name: 'games_119',
  description: 'Squelette de commande (games) #119',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_119 non implémentée.' }, { quoted: msg })
  }
}
