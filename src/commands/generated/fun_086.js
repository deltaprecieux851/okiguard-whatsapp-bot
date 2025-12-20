module.exports = {
  name: 'fun_086',
  description: 'Squelette de commande (fun) #86',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_086 non implémentée.' }, { quoted: msg })
  }
}
