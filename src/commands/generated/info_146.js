module.exports = {
  name: 'info_146',
  description: 'Squelette de commande (info) #146',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_146 non implémentée.' }, { quoted: msg })
  }
}
