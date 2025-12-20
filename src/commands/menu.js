const fs = require('fs')
const path = require('path')

function listCategory(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const it of items) {
    if (it.isFile() && it.name.endsWith('.js')) files.push(it.name)
  }
  return files
}

module.exports = {
  name: 'menu',
  description: 'Affiche les répertoires de commandes et leur contenu. Usage: !menu [categorie]',
  exec: async ({ sock, msg, args }) => {
    const base = path.join(__dirname)
    const cat = args[0]
    if (!cat) {
      // show categories
      const entries = fs.readdirSync(base, { withFileTypes: true })
      const cats = []
      const filesRoot = []
      for (const e of entries) {
        if (e.isDirectory()) {
          const count = listCategory(path.join(base, e.name)).length
          cats.push(`${e.name} (${count})`)
        } else if (e.isFile() && e.name.endsWith('.js')) {
          filesRoot.push(e.name)
        }
      }
      let text = '*Catégories de commandes :*\n'
      if (cats.length) text += cats.map(c=>`- ${c}`).join('\n') + '\n\n'
      if (filesRoot.length) text += '*Commandes racine :*\n' + filesRoot.map(f=>`- ${f.replace('.js','')}`).join('\n') + '\n\n'
      text += '\nUtilise `!menu <categorie>` pour lister les commandes de la catégorie et leur description.'
      // send header image if available, then send the full text
      try {
        const header = path.join(__dirname, 'assets', 'headers', 'menu.svg')
        const defaultHeader = path.join(__dirname, 'assets', 'headers', 'command.svg')
        const p = fs.existsSync(header) ? header : (fs.existsSync(defaultHeader) ? defaultHeader : null)
        if (p) {
          const buffer = fs.readFileSync(p)
          await sock.sendMessage(msg.key.remoteJid, { image: buffer, caption: `OkiGuard — Menu` }, { quoted: msg })
        }
      } catch (e) { /* ignore */ }
      return await sock.sendMessage(msg.key.remoteJid, { text }, { quoted: msg })
    }

    // list commands in a category
    const dir = path.join(base, cat)
    if (!fs.existsSync(dir) || !fs.lstatSync(dir).isDirectory()) return await sock.sendMessage(msg.key.remoteJid, { text: 'Catégorie introuvable' }, { quoted: msg })
    const files = listCategory(dir)
    if (!files.length) return await sock.sendMessage(msg.key.remoteJid, { text: 'Aucune commande dans cette catégorie' }, { quoted: msg })
    const parts = []
    for (const f of files) {
      try {
        const cmd = require(path.join(dir, f))
        parts.push(`- !${cmd.name} : ${cmd.description || 'Pas de description'}`)
      } catch (e) { parts.push(`- ${f}`) }
    }
    const text = `Commandes (${cat}):\n` + parts.join('\n')
    await sock.sendMessage(msg.key.remoteJid, { text }, { quoted: msg })
  }
}
