module.exports = {
  name: 'info_188',
  description: 'Squelette de commande (info) #188',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_188 non implémentée.' }, { quoted: msg })
  }
}
