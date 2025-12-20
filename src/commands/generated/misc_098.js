module.exports = {
  name: 'misc_098',
  description: 'Squelette de commande (misc) #98',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_098 non implémentée.' }, { quoted: msg })
  }
}
