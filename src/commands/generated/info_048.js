module.exports = {
  name: 'info_048',
  description: 'Squelette de commande (info) #48',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_048 non implémentée.' }, { quoted: msg })
  }
}
