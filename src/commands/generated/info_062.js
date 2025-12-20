module.exports = {
  name: 'info_062',
  description: 'Squelette de commande (info) #62',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_062 non implémentée.' }, { quoted: msg })
  }
}
