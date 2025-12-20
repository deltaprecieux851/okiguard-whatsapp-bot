module.exports = {
  name: 'info_160',
  description: 'Squelette de commande (info) #160',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_160 non implémentée.' }, { quoted: msg })
  }
}
