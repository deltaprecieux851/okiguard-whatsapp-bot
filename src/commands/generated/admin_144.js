module.exports = {
  name: 'admin_144',
  description: 'Squelette de commande (admin) #144',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande admin_144 non implémentée.' }, { quoted: msg })
  }
}
