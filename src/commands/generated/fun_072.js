module.exports = {
  name: 'fun_072',
  description: 'Squelette de commande (fun) #72',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_072 non implémentée.' }, { quoted: msg })
  }
}
