module.exports = {
  name: 'time_263',
  description: 'Squelette de commande (time) #263',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande time_263 non implémentée.' }, { quoted: msg })
  }
}
