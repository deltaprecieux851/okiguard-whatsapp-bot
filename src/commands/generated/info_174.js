module.exports = {
  name: 'info_174',
  description: 'Squelette de commande (info) #174',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_174 non implémentée.' }, { quoted: msg })
  }
}
