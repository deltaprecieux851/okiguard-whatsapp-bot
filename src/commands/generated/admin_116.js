module.exports = {
  name: 'admin_116',
  description: 'Squelette de commande (admin) #116',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_116 non implémentée.' }, { quoted: msg })
  }
}
