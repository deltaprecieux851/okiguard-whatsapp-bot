module.exports = {
  name: 'dev_251',
  description: 'Squelette de commande (dev) #251',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_251 non implémentée.' }, { quoted: msg })
  }
}
