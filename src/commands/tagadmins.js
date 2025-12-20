module.exports = {
  name: 'tagadmin',
  description: 'Mentionne seulement les admins du groupe',
  exec: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Commande uniquement pour les groupes.' }, { quoted: msg })
    try {
      const meta = await sock.groupMetadata(jid)
      const admins = meta.participants.filter(p=>p.admin || p.isAdmin).map(p=>p.id)
      if (!admins.length) return await sock.sendMessage(jid, { text: 'Aucun admin trouvé.' }, { quoted: msg })
      await sock.sendMessage(jid, { text: 'Mention des admins', mentions: admins })
    } catch (e) { await sock.sendMessage(jid, { text: 'Erreur tagadmin' }, { quoted: msg }) }
  }
}
