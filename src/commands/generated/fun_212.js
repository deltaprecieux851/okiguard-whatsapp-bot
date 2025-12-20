module.exports = {
  name: 'fun_212',
  description: 'Squelette de commande (fun) #212',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_212 non implémentée.' }, { quoted: msg })
  }
}
