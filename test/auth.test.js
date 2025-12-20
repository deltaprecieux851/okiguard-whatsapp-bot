const fs = require('fs')
const path = require('path')
const { isOwner, addOwner, removeOwner, normalizeJid } = require('../src/lib/auth')
const DATA = path.join(__dirname, '..', 'data.json')

let orig
beforeAll(() => { orig = fs.readFileSync(DATA, 'utf8') })
afterAll(() => { fs.writeFileSync(DATA, orig) })

test('normalizeJid formats numbers', () => {
  expect(normalizeJid('+243982730192')).toBe('243982730192@s.whatsapp.net')
})

test('add/remove owner works', () => {
  const num = '+243999000000'
  addOwner(num)
  expect(isOwner(num)).toBe(true)
  removeOwner(num)
  expect(isOwner(num)).toBe(false)
})
