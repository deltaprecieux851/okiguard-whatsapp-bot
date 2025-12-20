module.exports = {
  name: 'download',
  description: 'Télécharger le média d\'un message (répondre au média avec !download)',
  exec: async ({ sock, msg }) => {
    const quoted = msg.message.extendedTextMessage && msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.quotedMessage
    const hasMedia = quoted && (quoted.imageMessage || quoted.videoMessage || quoted.audioMessage || quoted.documentMessage)
    if (!hasMedia) return await sock.sendMessage(msg.key.remoteJid, { text: 'Réponds à un média avec !download' }, { quoted: msg })
    try {
      const buffer = await sock.downloadMediaMessage({ message: { ...quoted } }, 'buffer')
      // renvoyer comme document
      await sock.sendMessage(msg.key.remoteJid, { document: buffer, fileName: 'downloaded.bin' }, { quoted: msg })
    } catch (e) { await sock.sendMessage(msg.key.remoteJid, { text: 'Impossible de télécharger media.' }, { quoted: msg }) }
  }
}
