module.exports = {
  name: 'admin_298',
  description: 'Squelette de commande (admin) #298',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_298 non implémentée.' }, { quoted: msg })
  }
}
