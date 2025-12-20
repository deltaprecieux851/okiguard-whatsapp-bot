module.exports = {
  name: 'misc_154',
  description: 'Squelette de commande (misc) #154',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_154 non implémentée.' }, { quoted: msg })
  }
}
