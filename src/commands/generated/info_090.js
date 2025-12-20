module.exports = {
  name: 'info_090',
  description: 'Squelette de commande (info) #90',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_090 non implémentée.' }, { quoted: msg })
  }
}
