module.exports = {
  name: 'admin_018',
  description: 'Squelette de commande (admin) #18',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_018 non implémentée.' }, { quoted: msg })
  }
}
