module.exports = {
  name: 'admin_270',
  description: 'Squelette de commande (admin) #270',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_270 non implémentée.' }, { quoted: msg })
  }
}
