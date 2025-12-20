module.exports = {
  name: 'misc_294',
  description: 'Squelette de commande (misc) #294',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_294 non implémentée.' }, { quoted: msg })
  }
}
