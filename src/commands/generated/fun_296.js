module.exports = {
  name: 'fun_296',
  description: 'Squelette de commande (fun) #296',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_296 non implémentée.' }, { quoted: msg })
  }
}
