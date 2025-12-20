module.exports = {
  name: 'fun_282',
  description: 'Squelette de commande (fun) #282',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_282 non implémentée.' }, { quoted: msg })
  }
}
