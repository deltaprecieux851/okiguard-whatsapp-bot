module.exports = {
  name: 'help',
  description: 'Liste les commandes disponibles',
  exec: async ({ sock, msg, commands }) => {
    const unique = new Set()
    for (const [k, v] of commands) unique.add(v.name)
    const list = Array.from(unique).sort()
    const text = 'Commandes disponibles:\n' + list.map(c=>`!${c}`).join('\n') + '\n\nUtilise !menu pour voir les commandes par catégorie et leur usage. Les commandes sensibles (owner/sessions) sont réservées aux propriétaires.'
    await sock.sendMessage(msg.key.remoteJid, { text }, { quoted: msg })
  }
}
