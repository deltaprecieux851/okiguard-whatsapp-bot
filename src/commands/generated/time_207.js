module.exports = {
  name: 'time_207',
  description: 'Squelette de commande (time) #207',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande time_207 non implémentée.' }, { quoted: msg })
  }
}
