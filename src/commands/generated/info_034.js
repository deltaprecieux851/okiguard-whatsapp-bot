module.exports = {
  name: 'info_034',
  description: 'Squelette de commande (info) #34',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_034 non implémentée.' }, { quoted: msg })
  }
}
