module.exports = {
  name: 'setgdesc',
  description: "Changer la description du groupe: !setgdesc nouvelle description",
  exec: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Uniquement pour groupes.' }, { quoted: msg })
    const desc = args.join(' ')
    if (!desc) return await sock.sendMessage(jid, { text: 'Usage: !setgdesc nouvelle description' }, { quoted: msg })
    try { await sock.groupUpdateDescription(jid, desc); await sock.sendMessage(jid, { text: 'Description mise à jour.' }, { quoted: msg }) } catch (e) { await sock.sendMessage(jid, { text: 'Impossible de changer la description.' }, { quoted: msg }) }
  }
}
