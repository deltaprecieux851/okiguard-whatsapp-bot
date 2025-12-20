module.exports = {
  name: 'info_258',
  description: 'Squelette de commande (info) #258',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_258 non implémentée.' }, { quoted: msg })
  }
}
