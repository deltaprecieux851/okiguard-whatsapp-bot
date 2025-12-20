module.exports = {
  name: 'games_231',
  description: 'Squelette de commande (games) #231',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_231 non implémentée.' }, { quoted: msg })
  }
}
