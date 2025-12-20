module.exports = {
  name: 'text_023',
  description: 'Squelette de commande (text) #23',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_023 non implémentée.' }, { quoted: msg })
  }
}
