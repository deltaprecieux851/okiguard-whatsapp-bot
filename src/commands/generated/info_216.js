module.exports = {
  name: 'info_216',
  description: 'Squelette de commande (info) #216',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_216 non implémentée.' }, { quoted: msg })
  }
}
