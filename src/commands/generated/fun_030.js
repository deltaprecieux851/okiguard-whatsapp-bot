module.exports = {
  name: 'fun_030',
  description: 'Squelette de commande (fun) #30',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_030 non implémentée.' }, { quoted: msg })
  }
}
