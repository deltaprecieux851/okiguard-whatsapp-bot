module.exports = {
  name: 'fun_170',
  description: 'Squelette de commande (fun) #170',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_170 non implémentée.' }, { quoted: msg })
  }
}
