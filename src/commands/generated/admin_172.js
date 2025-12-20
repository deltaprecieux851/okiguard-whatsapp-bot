module.exports = {
  name: 'admin_172',
  description: 'Squelette de commande (admin) #172',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_172 non implémentée.' }, { quoted: msg })
  }
}
