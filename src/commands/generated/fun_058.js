module.exports = {
  name: 'fun_058',
  description: 'Squelette de commande (fun) #58',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande fun_058 non implémentée.' }, { quoted: msg })
  }
}
