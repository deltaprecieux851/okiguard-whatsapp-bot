const { load, save } = require('../lib/data')
module.exports = {
  name: 'antibadword',
  description: 'Gérer mots interdits: !antibadword add|remove|list|on|off',
  exec: async ({ sock, msg, args }) => {
    const data = load()
    data.groupSettings = data.groupSettings || {}
    const jid = msg.key.remoteJid
    if (!jid.endsWith('@g.us')) return await sock.sendMessage(jid, { text: 'Uniquement pour groupes.' }, { quoted: msg })
    const sub = args[0]
    data.groupSettings[jid] = data.groupSettings[jid] || {}
    if (sub === 'add') {
      const w = args.slice(1).join(' ')
      if (!w) return await sock.sendMessage(jid, { text: 'Usage: !antibadword add <mot>' }, { quoted: msg })
      data.groupSettings[jid].badwords = data.groupSettings[jid].badwords || []
      data.groupSettings[jid].badwords.push(w)
      save(data)
      return await sock.sendMessage(jid, { text: `Mot ajouté: ${w}` }, { quoted: msg })
    }
    if (sub === 'remove') {
      const w = args.slice(1).join(' ')
      if (!w) return await sock.sendMessage(jid, { text: 'Usage: !antibadword remove <mot>' }, { quoted: msg })
      data.groupSettings[jid].badwords = (data.groupSettings[jid].badwords || []).filter(x=>x!==w)
      save(data)
      return await sock.sendMessage(jid, { text: `Mot retiré: ${w}` }, { quoted: msg })
    }
    if (sub === 'list') {
      const list = (data.groupSettings[jid].badwords || []).join(', ') || 'Aucun'
      return await sock.sendMessage(jid, { text: `Mots interdits: ${list}` }, { quoted: msg })
    }
    if (sub === 'on' || sub === 'off') {
      data.groupSettings[jid].badwordsEnabled = sub === 'on'
      save(data)
      return await sock.sendMessage(jid, { text: `antibadword ${sub}` }, { quoted: msg })
    }
    await sock.sendMessage(jid, { text: 'Usage: !antibadword add|remove|list|on|off' }, { quoted: msg })
  }
}
