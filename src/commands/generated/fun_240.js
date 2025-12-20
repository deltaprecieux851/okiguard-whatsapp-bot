module.exports = {
  name: 'fun_240',
  description: 'Squelette de commande (fun) #240',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_240 non implémentée.' }, { quoted: msg })
  }
}
