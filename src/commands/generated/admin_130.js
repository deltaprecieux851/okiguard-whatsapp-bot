module.exports = {
  name: 'admin_130',
  description: 'Squelette de commande (admin) #130',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_130 non implémentée.' }, { quoted: msg })
  }
}
