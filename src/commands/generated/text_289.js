module.exports = {
  name: 'text_289',
  description: 'Squelette de commande (text) #289',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande text_289 non implémentée.' }, { quoted: msg })
  }
}
