const { load, save } = require('./data')

function normalizeJid(jid) {
  if (!jid) return ''
  if (jid.includes('@')) return jid
  return `${jid.replace(/\D/g,'')}@s.whatsapp.net`
}

function isOwner(jid) {
  const data = load()
  const owners = data.owners || []
  return owners.includes(normalizeJid(jid))
}

function addOwner(number) {
  const data = load()
  data.owners = data.owners || []
  const j = normalizeJid(number)
  if (!data.owners.includes(j)) {
    data.owners.push(j)
    save(data)
    return true
  }
  return false
}

function removeOwner(number) {
  const data = load()
  data.owners = data.owners || []
  const j = normalizeJid(number)
  const before = data.owners.length
  data.owners = data.owners.filter(x=>x!==j)
  if (data.owners.length !== before) { save(data); return true }
  return false
}

module.exports = { isOwner, addOwner, removeOwner, normalizeJid }
