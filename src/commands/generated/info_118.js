module.exports = {
  name: 'info_118',
  description: 'Squelette de commande (info) #118',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_118 non implémentée.' }, { quoted: msg })
  }
}
