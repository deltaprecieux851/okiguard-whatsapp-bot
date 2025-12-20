module.exports = {
  name: 'fun_268',
  description: 'Squelette de commande (fun) #268',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_268 non implémentée.' }, { quoted: msg })
  }
}
