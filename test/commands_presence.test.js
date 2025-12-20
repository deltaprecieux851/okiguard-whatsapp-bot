const { loadCommands } = require('../src/commands/loader')
const path = require('path')

test('essential commands present', () => {
  const commands = loadCommands(path.join(__dirname, '..', 'src', 'commands'))
  const needed = ['menu','owner','sessions','antibadword','mute','mode','admintoken']
  for (const n of needed) expect(commands.has(n)).toBeTruthy()
})
