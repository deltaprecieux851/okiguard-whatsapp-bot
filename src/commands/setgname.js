module.exports = {
  name: 'setgname',
  description: "Changer le nom du groupe: !setgname Nouveau nom",
  exec: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Uniquement pour groupes.' }, { quoted: msg })
    const name = args.join(' ')
    if (!name) return await sock.sendMessage(jid, { text: 'Usage: !setgname Nouveau nom' }, { quoted: msg })
    try { await sock.groupUpdateSubject(jid, name); await sock.sendMessage(jid, { text: 'Nom du groupe mis à jour.' }, { quoted: msg }) } catch (e) { await sock.sendMessage(jid, { text: 'Impossible de changer le nom.' }, { quoted: msg }) }
  }
}
