module.exports = {
  name: 'admin_074',
  description: 'Squelette de commande (admin) #74',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_074 non implémentée.' }, { quoted: msg })
  }
}
