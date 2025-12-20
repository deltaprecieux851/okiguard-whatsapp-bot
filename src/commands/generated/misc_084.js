module.exports = {
  name: 'misc_084',
  description: 'Squelette de commande (misc) #84',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_084 non implémentée.' }, { quoted: msg })
  }
}
