module.exports = {
  name: 'info_272',
  description: 'Squelette de commande (info) #272',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_272 non implémentée.' }, { quoted: msg })
  }
}
