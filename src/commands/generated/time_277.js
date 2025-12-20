module.exports = {
  name: 'time_277',
  description: 'Squelette de commande (time) #277',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande time_277 non implémentée.' }, { quoted: msg })
  }
}
