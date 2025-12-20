module.exports = {
  name: 'media2_047',
  description: 'Squelette de commande (media2) #47',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande media2_047 non implémentée.' }, { quoted: msg })
  }
}
