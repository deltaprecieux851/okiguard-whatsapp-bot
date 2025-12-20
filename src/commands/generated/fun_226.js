module.exports = {
  name: 'fun_226',
  description: 'Squelette de commande (fun) #226',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_226 non implémentée.' }, { quoted: msg })
  }
}
