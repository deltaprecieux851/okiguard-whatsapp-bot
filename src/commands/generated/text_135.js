module.exports = {
  name: 'text_135',
  description: 'Squelette de commande (text) #135',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_135 non implémentée.' }, { quoted: msg })
  }
}
