module.exports = {
  name: 'admin_032',
  description: 'Squelette de commande (admin) #32',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_032 non implémentée.' }, { quoted: msg })
  }
}
