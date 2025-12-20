module.exports = {
  name: 'info_132',
  description: 'Squelette de commande (info) #132',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_132 non implémentée.' }, { quoted: msg })
  }
}
