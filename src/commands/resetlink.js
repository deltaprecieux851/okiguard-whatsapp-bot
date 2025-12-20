module.exports = {
  name: 'resetlink',
  description: 'Révoque et renvoie le lien d\'invitation du groupe',
  exec: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Uniquement pour groupes.' }, { quoted: msg })
    try {
      const res = await sock.groupRevokeInvite(jid)
      const newLink = res.inviteCode ? `https://chat.whatsapp.com/${res.inviteCode}` : 'Lien non disponible'
      await sock.sendMessage(jid, { text: `Nouveau lien: ${newLink}` }, { quoted: msg })
    } catch (e) { await sock.sendMessage(jid, { text: 'Impossible de révoquer le lien.' }, { quoted: msg }) }
  }
}
