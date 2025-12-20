module.exports = {
  name: 'info_104',
  description: 'Squelette de commande (info) #104',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_104 non implémentée.' }, { quoted: msg })
  }
}
