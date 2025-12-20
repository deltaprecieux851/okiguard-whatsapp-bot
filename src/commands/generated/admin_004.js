module.exports = {
  name: 'admin_004',
  description: 'Squelette de commande (admin) #4',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_004 non implémentée.' }, { quoted: msg })
  }
}
