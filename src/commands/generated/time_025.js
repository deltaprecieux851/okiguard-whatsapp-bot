module.exports = {
  name: 'time_025',
  description: 'Squelette de commande (time) #25',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande time_025 non implémentée.' }, { quoted: msg })
  }
}
