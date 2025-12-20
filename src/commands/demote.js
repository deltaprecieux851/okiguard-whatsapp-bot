module.exports = {
  name: 'demote',
  description: 'Rétirer les droits d\'admin (usage: !demote @num ou répondre)',
  exec: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Commande uniquement pour les groupes.' }, { quoted: msg })
    let target = null
    const quoted = msg.message.extendedTextMessage && msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.participant
    if (quoted) target = quoted
    if (args[0] && args[0].startsWith('+')) target = `${args[0].replace(/\D/g,'')}@s.whatsapp.net`
    if (!target) return await sock.sendMessage(jid, { text: 'Usage: répondre au message ou !demote +243xxxxxxx' }, { quoted: msg })
    try { await sock.groupParticipantsUpdate(jid, [target], 'demote'); await sock.sendMessage(jid, { text: 'Membre démoti.' }, { quoted: msg }) } catch (e) { await sock.sendMessage(jid, { text: 'Impossible de démoter.' }, { quoted: msg }) }
  }
}
