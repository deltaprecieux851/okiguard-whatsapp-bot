module.exports = {
  name: 'misc_196',
  description: 'Squelette de commande (misc) #196',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_196 non implémentée.' }, { quoted: msg })
  }
}
