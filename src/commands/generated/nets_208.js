module.exports = {
  name: 'nets_208',
  description: 'Squelette de commande (nets) #208',
  aliases: [],
  exec: async ({ sock, msg, args }) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Commande nets_208 non implémentée.' }, { quoted: msg })
  }
}
