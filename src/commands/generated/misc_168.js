module.exports = {
  name: 'misc_168',
  description: 'Squelette de commande (misc) #168',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_168 non implémentée.' }, { quoted: msg })
  }
}
