module.exports = {
  name: 'admin_228',
  description: 'Squelette de commande (admin) #228',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_228 non implémentée.' }, { quoted: msg })
  }
}
