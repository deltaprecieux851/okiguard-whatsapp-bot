module.exports = {
  name: 'info_202',
  description: 'Squelette de commande (info) #202',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_202 non implémentée.' }, { quoted: msg })
  }
}
