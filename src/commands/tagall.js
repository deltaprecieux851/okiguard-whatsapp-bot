module.exports = {
  name: 'tagall',
  description: 'Mentionne tous les membres du groupe',
  exec: async ({ sock, msg, args, store }) => {
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Commande uniquement pour les groupes.' }, { quoted: msg })
    try {
      const meta = await sock.groupMetadata(jid)
      const p = meta.participants.map(u => u.id)
      const text = args.join(' ') || '🔊 Mention de tous'
      await sock.sendMessage(jid, { text, mentions: p })
    } catch (e) {
      await sock.sendMessage(jid, { text: 'Impossible de récupérer la liste des membres.' }, { quoted: msg })
    }
  }
}
