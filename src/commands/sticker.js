const { writeFileSync } = require('fs')
module.exports = {
  name: 'sticker',
  description: 'Transforme une image envoyée en sticker (usage: répondre à une image avec !sticker)',
  exec: async ({ sock, msg }) => {
    // Simple behaviour: if quoted image, re-send as sticker (Baileys handles type)
    const quoted = msg.message.extendedTextMessage && msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.quotedMessage
    const hasImage = (msg.message.imageMessage) || (quoted && quoted.imageMessage)
    if (!hasImage) return await sock.sendMessage(msg.key.remoteJid, { text: 'Réponds à une image avec !sticker' }, { quoted: msg })
    const imageMessage = msg.message.imageMessage || quoted.imageMessage
    const buffer = await sock.downloadMediaMessage({ message: { imageMessage } }, 'buffer')
    await sock.sendMessage(msg.key.remoteJid, { sticker: buffer }, { quoted: msg })
  }
}
