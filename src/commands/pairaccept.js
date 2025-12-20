const { load, save } = require('../lib/data')
module.exports = {
  name: 'pairaccept',
  description: 'Accepter un pair: !pairaccept <code>',
  exec: async ({ sock, msg, args }) => {
    const code = args[0]
    if (!code) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !pairaccept <code>' }, { quoted: msg })
    const data = load()
    if (!data.pairs || !data.pairs[code]) return await sock.sendMessage(msg.key.remoteJid, { text: 'Code invalide' }, { quoted: msg })
    const entry = data.pairs[code]
    // mark as used by this jid
    entry.claimedBy = msg.key.participant || msg.key.remoteJid
    save(data)
    await sock.sendMessage(msg.key.remoteJid, { text: `Appairage OK. Le propriétaire: ${entry.owner}, numero: ${entry.number}` }, { quoted: msg })
  }
}
