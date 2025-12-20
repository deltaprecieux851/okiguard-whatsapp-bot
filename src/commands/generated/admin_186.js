module.exports = {
  name: 'admin_186',
  description: 'Squelette de commande (admin) #186',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_186 non implémentée.' }, { quoted: msg })
  }
}
