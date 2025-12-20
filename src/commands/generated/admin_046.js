module.exports = {
  name: 'admin_046',
  description: 'Squelette de commande (admin) #46',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_046 non implémentée.' }, { quoted: msg })
  }
}
