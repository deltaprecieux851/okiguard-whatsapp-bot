module.exports = {
  name: 'info_020',
  description: 'Squelette de commande (info) #20',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_020 non implémentée.' }, { quoted: msg })
  }
}
