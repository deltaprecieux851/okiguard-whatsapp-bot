const crypto = require('crypto')
const { load, save } = require('../lib/data')

function genCode() {
  return crypto.randomBytes(4).toString('hex')
}

module.exports = {
  name: 'parrain',
  description: 'Gérer parrainage: !parrain create | !parrain use <code>',
  exec: async ({ sock, msg, args }) => {
    const { load, save } = require('../lib/data')
    const data = load()
    const sub = args[0]
    const sender = msg.key && msg.key.participant ? msg.key.participant : msg.key.remoteJid
    if (sub === 'create') {
      const code = genCode()
      data.referrals[code] = { owner: sender, uses: 0 }
      save(data)
      await sock.sendMessage(msg.key.remoteJid, { text: `Code créé: ${code}` }, { quoted: msg })
      return
    }
    if (sub === 'use') {
      const code = args[1]
      if (!code || !data.referrals[code]) return await sock.sendMessage(msg.key.remoteJid, { text: 'Code invalide' }, { quoted: msg })
      if (data.referrals[code].usedBy && data.referrals[code].usedBy.includes(sender)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Tu as déjà utilisé ce code.' }, { quoted: msg })
      data.referrals[code].uses = (data.referrals[code].uses || 0) + 1
      data.referrals[code].usedBy = data.referrals[code].usedBy || []
      data.referrals[code].usedBy.push(sender)
      save(data)
      await sock.sendMessage(msg.key.remoteJid, { text: `Merci ! Le propriétaire (${data.referrals[code].owner}) a maintenant ${data.referrals[code].uses} parrainages.` }, { quoted: msg })
      return
    }
    await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !parrain create | !parrain use <code>' }, { quoted: msg })
  }
}
