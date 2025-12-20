module.exports = {
  name: 'time_249',
  description: 'Squelette de commande (time) #249',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande time_249 non implémentée.' }, { quoted: msg })
  }
}
