module.exports = {
  name: 'info_230',
  description: 'Squelette de commande (info) #230',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_230 non implémentée.' }, { quoted: msg })
  }
}
