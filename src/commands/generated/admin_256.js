module.exports = {
  name: 'admin_256',
  description: 'Squelette de commande (admin) #256',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_256 non implémentée.' }, { quoted: msg })
  }
}
