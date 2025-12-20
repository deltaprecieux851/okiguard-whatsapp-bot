module.exports = {
  name: 'games_077',
  description: 'Squelette de commande (games) #77',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande games_077 non implémentée.' }, { quoted: msg })
  }
}
