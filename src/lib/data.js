const fs = require('fs')
const path = require('path')
const FILE = path.join(__dirname, '..', 'data.json')

function load() {
  try {
    if (!fs.existsSync(FILE)) return { referrals: {} }
    return JSON.parse(fs.readFileSync(FILE, 'utf8'))
  } catch (e) { return { referrals: {} } }
}
function save(data) { fs.writeFileSync(FILE, JSON.stringify(data, null, 2)) }

module.exports = { load, save }
