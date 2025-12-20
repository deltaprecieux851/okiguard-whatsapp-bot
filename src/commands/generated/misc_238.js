module.exports = {
  name: 'misc_238',
  description: 'Squelette de commande (misc) #238',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_238 non implémentée.' }, { quoted: msg })
  }
}
