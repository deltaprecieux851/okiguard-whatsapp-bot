module.exports = {
  name: 'fun_198',
  description: 'Squelette de commande (fun) #198',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_198 non implémentée.' }, { quoted: msg })
  }
}
