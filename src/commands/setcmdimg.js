const fs = require('fs')
const path = require('path')
const { isOwner } = require('../lib/auth')

module.exports = {
  name: 'setcmdimg',
  description: 'Définir une image pour une commande (owner only). Usage: répondre à une image avec: !setcmdimg <command>' ,
  exec: async ({ sock, msg, args }) => {
    const caller = msg.key.participant || msg.key.remoteJid
    if (!isOwner(caller)) return await sock.sendMessage(msg.key.remoteJid, { text: 'Réservé au propriétaire.' }, { quoted: msg })
    const cmd = args[0]
    if (!cmd) return await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: !setcmdimg <command> (réponds à une image)' }, { quoted: msg })
    const quoted = msg.message.extendedTextMessage && msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.quotedMessage
    if (!quoted) return await sock.sendMessage(msg.key.remoteJid, { text: 'Réponds à une image avec la commande.' }, { quoted: msg })
    const imageMessage = quoted.imageMessage || quoted.documentMessage
    if (!imageMessage) return await sock.sendMessage(msg.key.remoteJid, { text: 'Le message cité ne contient pas d\'image.' }, { quoted: msg })
    try {
      const buffer = await sock.downloadMediaMessage({ message: { ...quoted } }, 'buffer')
      const outDir = path.join(__dirname, '..', 'assets')
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
      const outPath = path.join(outDir, `${cmd}.png`)
      fs.writeFileSync(outPath, buffer)
      await sock.sendMessage(msg.key.remoteJid, { text: `Image définie pour !${cmd}` }, { quoted: msg })
    } catch (e) { await sock.sendMessage(msg.key.remoteJid, { text: 'Impossible de télécharger l\'image.' }, { quoted: msg }) }
  }
}
