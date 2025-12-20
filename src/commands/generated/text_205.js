module.exports = {
  name: 'text_205',
  description: 'Squelette de commande (text) #205',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_205 non implémentée.' }, { quoted: msg })
  }
}
