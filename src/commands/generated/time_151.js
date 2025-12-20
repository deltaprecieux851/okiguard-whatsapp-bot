module.exports = {
  name: 'time_151',
  description: 'Squelette de commande (time) #151',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande time_151 non implémentée.' }, { quoted: msg })
  }
}
