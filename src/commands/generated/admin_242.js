module.exports = {
  name: 'admin_242',
  description: 'Squelette de commande (admin) #242',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_242 non implémentée.' }, { quoted: msg })
  }
}
