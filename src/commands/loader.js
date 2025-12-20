const fs = require('fs')
const path = require('path')

function loadCommands(dir) {
  const commands = new Map()
  if (!fs.existsSync(dir)) return commands
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.js')) continue
    try {
      const cmd = require(path.join(dir, f))
      if (cmd && cmd.name) {
        commands.set(cmd.name, cmd)
        // aliases
        if (Array.isArray(cmd.aliases)) for (const a of cmd.aliases) commands.set(a, cmd)
      }
    } catch (e) {
      console.error('Erreur chargement commande', f, e)
    }
  }
  return commands
}

module.exports = { loadCommands }
