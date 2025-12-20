module.exports = {
  name: 'fun_044',
  description: 'Squelette de commande (fun) #44',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_044 non implémentée.' }, { quoted: msg })
  }
}
