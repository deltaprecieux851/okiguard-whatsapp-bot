module.exports = {
  name: 'fun_156',
  description: 'Squelette de commande (fun) #156',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_156 non implémentée.' }, { quoted: msg })
  }
}
