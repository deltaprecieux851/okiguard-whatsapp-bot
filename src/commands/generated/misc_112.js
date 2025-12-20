module.exports = {
  name: 'misc_112',
  description: 'Squelette de commande (misc) #112',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande misc_112 non implémentée.' }, { quoted: msg })
  }
}
