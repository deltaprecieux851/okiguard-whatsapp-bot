module.exports = {
  name: 'misc_070',
  description: 'Squelette de commande (misc) #70',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_070 non implémentée.' }, { quoted: msg })
  }
}
