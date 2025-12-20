module.exports = {
  name: 'fun_142',
  description: 'Squelette de commande (fun) #142',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_142 non implémentée.' }, { quoted: msg })
  }
}
