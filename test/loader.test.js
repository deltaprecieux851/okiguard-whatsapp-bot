const { loadCommands } = require('../src/commands/loader')
const path = require('path')

test('loadCommands loads at least help and ping', () => {
  const commands = loadCommands(path.join(__dirname, '..', 'src', 'commands'))
  expect(commands.has('help')).toBe(true)
  expect(commands.has('ping')).toBe(true)
})
