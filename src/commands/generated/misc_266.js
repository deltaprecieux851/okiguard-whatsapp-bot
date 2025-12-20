module.exports = {
  name: 'misc_266',
  description: 'Squelette de commande (misc) #266',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_266 non implémentée.' }, { quoted: msg })
  }
}
