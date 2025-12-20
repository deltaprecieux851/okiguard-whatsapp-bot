module.exports = {
  name: 'info_076',
  description: 'Squelette de commande (info) #76',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_076 non implémentée.' }, { quoted: msg })
  }
}
