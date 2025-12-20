module.exports = {
  name: 'promote',
  description: 'Promouvoir un membre (usage: !promote @num ou répondre au message)',
  exec: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Commande uniquement pour les groupes.' }, { quoted: msg })
    let target = null
    const quoted = msg.message.extendedTextMessage && msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.participant
    if (quoted) target = quoted
    if (args[0] && args[0].startsWith('+')) target = `${args[0].replace(/\D/g,'')}@s.whatsapp.net`
    if (!target) return await sock.sendMessage(jid, { text: 'Usage: répondre au message ou !promote +243xxxxxxx' }, { quoted: msg })
    try { await sock.groupParticipantsUpdate(jid, [target], 'promote'); await sock.sendMessage(jid, { text: 'Membre promu.' }, { quoted: msg }) } catch (e) { await sock.sendMessage(jid, { text: 'Impossible de promouvoir.' }, { quoted: msg }) }
  }
}
