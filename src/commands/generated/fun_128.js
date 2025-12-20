module.exports = {
  name: 'fun_128',
  description: 'Squelette de commande (fun) #128',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_128 non implémentée.' }, { quoted: msg })
  }
}
