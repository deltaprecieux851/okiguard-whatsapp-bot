module.exports = {
  name: 'games_203',
  description: 'Squelette de commande (games) #203',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_203 non implémentée.' }, { quoted: msg })
  }
}
