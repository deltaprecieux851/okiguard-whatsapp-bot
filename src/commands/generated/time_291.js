module.exports = {
  name: 'time_291',
  description: 'Squelette de commande (time) #291',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande time_291 non implémentée.' }, { quoted: msg })
  }
}
