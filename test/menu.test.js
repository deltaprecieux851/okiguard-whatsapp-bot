const menu = require('../src/commands/menu')

test('menu command exports name and description', () => {
  expect(menu.name).toBe('menu')
  expect(typeof menu.exec).toBe('function')
})
