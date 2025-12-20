module.exports = {
  name: 'fun_114',
  description: 'Squelette de commande (fun) #114',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_114 non implémentée.' }, { quoted: msg })
  }
}
