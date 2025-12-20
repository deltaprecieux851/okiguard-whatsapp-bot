module.exports = {
  name: 'fun_100',
  description: 'Squelette de commande (fun) #100',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_100 non implémentée.' }, { quoted: msg })
  }
}
