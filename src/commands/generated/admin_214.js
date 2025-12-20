module.exports = {
  name: 'admin_214',
  description: 'Squelette de commande (admin) #214',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_214 non implémentée.' }, { quoted: msg })
  }
}
