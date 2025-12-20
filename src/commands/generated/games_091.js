module.exports = {
  name: 'games_091',
  description: 'Squelette de commande (games) #91',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_091 non implémentée.' }, { quoted: msg })
  }
}
