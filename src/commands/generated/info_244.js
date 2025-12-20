module.exports = {
  name: 'info_244',
  description: 'Squelette de commande (info) #244',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_244 non implémentée.' }, { quoted: msg })
  }
}
