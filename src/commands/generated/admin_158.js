module.exports = {
  name: 'admin_158',
  description: 'Squelette de commande (admin) #158',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_158 non implémentée.' }, { quoted: msg })
  }
}
