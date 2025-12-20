module.exports = {
  name: 'info_006',
  description: 'Squelette de commande (info) #6',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_006 non implémentée.' }, { quoted: msg })
  }
}
