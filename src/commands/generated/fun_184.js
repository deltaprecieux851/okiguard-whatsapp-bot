module.exports = {
  name: 'fun_184',
  description: 'Squelette de commande (fun) #184',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_184 non implémentée.' }, { quoted: msg })
  }
}
