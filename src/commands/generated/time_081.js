module.exports = {
  name: 'time_081',
  description: 'Squelette de commande (time) #81',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande time_081 non implémentée.' }, { quoted: msg })
  }
}
