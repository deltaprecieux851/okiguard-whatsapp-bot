const crypto = require('crypto')
const { load, save } = require('../lib/data')
module.exports = {
  name: 'pair',
  description: 'Créer un code de pair pour un numéro: !pair +243xxxxxxx',
  exec: async ({ sock, msg, args }) => {
    const number = args[0]
    if (!number) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !pair +243xxxxxxx' }, { quoted: msg })
    const code = crypto.randomBytes(4).toString('hex')
    const data = load()
    data.pairs = data.pairs || {}
    data.pairs[code] = { number: number.replace(/\D/g,''), owner: msg.key.participant || msg.key.remoteJid }
    save(data)
    await sock.sendMessage(msg.key.remoteJid, { text: `Code de pair créé: ${code}` }, { quoted: msg })
  }
}
