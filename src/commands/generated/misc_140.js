module.exports = {
  name: 'misc_140',
  description: 'Squelette de commande (misc) #140',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_140 non implémentée.' }, { quoted: msg })
  }
}
