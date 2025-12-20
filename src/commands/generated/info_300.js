module.exports = {
  name: 'info_300',
  description: 'Squelette de commande (info) #300',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande info_300 non implémentée.' }, { quoted: msg })
  }
}
