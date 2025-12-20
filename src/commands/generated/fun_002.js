module.exports = {
  name: 'fun_002',
  description: 'Squelette de commande (fun) #2',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_002 non implémentée.' }, { quoted: msg })
  }
}
