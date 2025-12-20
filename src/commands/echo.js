module.exports = {
  name: 'echo',
  description: 'Renvoie le texte',
  exec: async ({ sock, msg, args }) => {
    const text = args.join(' ')
    if (!text) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !echo ton texte' }, { quoted: msg })
    await sock.sendMessage(msg.key.remoteJid, { text }, { quoted: msg })
  }
}
