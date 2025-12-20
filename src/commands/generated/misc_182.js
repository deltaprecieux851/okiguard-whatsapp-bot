module.exports = {
  name: 'misc_182',
  description: 'Squelette de commande (misc) #182',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_182 non implémentée.' }, { quoted: msg })
  }
}
