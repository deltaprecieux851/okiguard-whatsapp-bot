module.exports = {
  name: 'misc_014',
  description: 'Squelette de commande (misc) #14',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_014 non implémentée.' }, { quoted: msg })
  }
}
