module.exports = {
  name: 'info_286',
  description: 'Squelette de commande (info) #286',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_286 non implémentée.' }, { quoted: msg })
  }
}
