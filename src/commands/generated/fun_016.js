module.exports = {
  name: 'fun_016',
  description: 'Squelette de commande (fun) #16',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_016 non implémentée.' }, { quoted: msg })
  }
}
