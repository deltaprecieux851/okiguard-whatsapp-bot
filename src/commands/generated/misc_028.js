module.exports = {
  name: 'misc_028',
  description: 'Squelette de commande (misc) #28',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_028 non implémentée.' }, { quoted: msg })
  }
}
