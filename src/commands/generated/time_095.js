module.exports = {
  name: 'time_095',
  description: 'Squelette de commande (time) #95',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande time_095 non implémentée.' }, { quoted: msg })
  }
}
