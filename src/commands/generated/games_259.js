module.exports = {
  name: 'games_259',
  description: 'Squelette de commande (games) #259',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_259 non implémentée.' }, { quoted: msg })
  }
}
