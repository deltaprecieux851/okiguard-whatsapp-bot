module.exports = {
  name: 'misc_126',
  description: 'Squelette de commande (misc) #126',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_126 non implémentée.' }, { quoted: msg })
  }
}
