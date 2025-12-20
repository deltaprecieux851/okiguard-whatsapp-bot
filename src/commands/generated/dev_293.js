module.exports = {
  name: 'dev_293',
  description: 'Squelette de commande (dev) #293',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande dev_293 non implémentée.' }, { quoted: msg })
  }
}
