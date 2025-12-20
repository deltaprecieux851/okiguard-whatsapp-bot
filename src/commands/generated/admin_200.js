module.exports = {
  name: 'admin_200',
  description: 'Squelette de commande (admin) #200',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_200 non implémentée.' }, { quoted: msg })
  }
}
