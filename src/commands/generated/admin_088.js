module.exports = {
  name: 'admin_088',
  description: 'Squelette de commande (admin) #88',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_088 non implémentée.' }, { quoted: msg })
  }
}
