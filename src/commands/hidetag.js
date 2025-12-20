module.exports = {
  name: 'hidetag',
  description: "Envoie un message qui n'affiche pas les noms mais mentionne tous",
  exec: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Commande uniquement pour les groupes.' }, { quoted: msg })
    try {
      const meta = await sock.groupMetadata(jid)
      const p = meta.participants.map(u => u.id)
      const text = args.join(' ') || ''
      await sock.sendMessage(jid, { text, mentions: p })
    } catch (e) { await sock.sendMessage(jid, { text: 'Erreur hidetag' }, { quoted: msg }) }
  }
}
