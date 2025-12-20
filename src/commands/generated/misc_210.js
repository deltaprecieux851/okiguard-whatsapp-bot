module.exports = {
  name: 'misc_210',
  description: 'Squelette de commande (misc) #210',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_210 non implémentée.' }, { quoted: msg })
  }
}
