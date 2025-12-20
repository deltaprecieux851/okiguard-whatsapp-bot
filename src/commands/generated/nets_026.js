module.exports = {
  name: 'nets_026',
  description: 'Squelette de commande (nets) #26',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_026 non implémentée.' }, { quoted: msg })
  }
}
