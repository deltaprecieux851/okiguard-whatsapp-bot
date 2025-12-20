module.exports = {
  name: 'misc_056',
  description: 'Squelette de commande (misc) #56',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_056 non implémentée.' }, { quoted: msg })
  }
}
