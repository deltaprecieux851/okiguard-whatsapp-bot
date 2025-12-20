module.exports = {
  name: 'misc_042',
  description: 'Squelette de commande (misc) #42',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_042 non implémentée.' }, { quoted: msg })
  }
}
