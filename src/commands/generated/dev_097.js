module.exports = {
  name: 'dev_097',
  description: 'Squelette de commande (dev) #97',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_097 non implémentée.' }, { quoted: msg })
  }
}
