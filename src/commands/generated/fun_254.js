module.exports = {
  name: 'fun_254',
  description: 'Squelette de commande (fun) #254',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_254 non implémentée.' }, { quoted: msg })
  }
}
