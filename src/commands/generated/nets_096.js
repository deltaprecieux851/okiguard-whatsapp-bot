module.exports = {
  name: 'nets_096',
  description: 'Squelette de commande (nets) #96',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_096 non implémentée.' }, { quoted: msg })
  }
}
