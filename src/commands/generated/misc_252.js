module.exports = {
  name: 'misc_252',
  description: 'Squelette de commande (misc) #252',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_252 non implémentée.' }, { quoted: msg })
  }
}
