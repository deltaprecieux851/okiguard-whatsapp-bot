module.exports = {
  name: 'games_049',
  description: 'Squelette de commande (games) #49',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_049 non implémentée.' }, { quoted: msg })
  }
}
