module.exports = {
  name: 'misc_224',
  description: 'Squelette de commande (misc) #224',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_224 non implémentée.' }, { quoted: msg })
  }
}
