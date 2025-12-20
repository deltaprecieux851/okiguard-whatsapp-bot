module.exports = {
  name: 'admin_284',
  description: 'Squelette de commande (admin) #284',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_284 non implémentée.' }, { quoted: msg })
  }
}
