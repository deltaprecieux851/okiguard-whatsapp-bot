module.exports = {
  name: 'misc_280',
  description: 'Squelette de commande (misc) #280',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_280 non implémentée.' }, { quoted: msg })
  }
}
