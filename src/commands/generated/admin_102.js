module.exports = {
  name: 'admin_102',
  description: 'Squelette de commande (admin) #102',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_102 non implémentée.' }, { quoted: msg })
  }
}
