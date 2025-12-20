module.exports = {
  name: 'admin_060',
  description: 'Squelette de commande (admin) #60',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_060 non implémentée.' }, { quoted: msg })
  }
}
