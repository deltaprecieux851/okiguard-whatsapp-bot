const { execSync } = require('child_process')

function ok(msg) { console.log('\x1b[32mOK\x1b[0m', msg) }
function warn(msg) { console.log('\x1b[33mWARN\x1b[0m', msg) }
function fail(msg) { console.error('\x1b[31mFAIL\x1b[0m', msg) }

let okCount = 0
let warnCount = 0
let failCount = 0

// Node version
const nodeVersion = process.version
if (Number(process.version.replace(/^v/, '').split('.')[0]) >= 18) { ok('Node ' + nodeVersion) ; okCount++ } else { fail('Node >= 18 requis. Version trouvée: ' + nodeVersion); failCount++ }

// npm
try {
  const npm = execSync('npm -v', { stdio: ['ignore','pipe','ignore'] }).toString().trim()
  ok('npm ' + npm); okCount++
} catch (e) { fail('npm non trouvé dans le PATH'); failCount++ }

// git
try {
  const g = execSync('git --version', { stdio: ['ignore','pipe','ignore'] }).toString().trim()
  ok(g); okCount++
} catch (e) { warn('git non trouvé dans le PATH (nécessaire pour push/release)'); warnCount++ }

// Check env vars
const recommended = ['ADMIN_TOKEN']
const missing = recommended.filter(k => !process.env[k])
if (missing.length) { warn('Variables d\'environnement recommandées manquantes: ' + missing.join(', ')); warnCount++ } else { ok('Variables d\'environnement recommandées présentes'); okCount++ }

// Check sessions dir
const fs = require('fs')
if (fs.existsSync('./sessions')) { ok('Dossier sessions present') ; okCount++ } else { warn('Dossier sessions absent — créez ./sessions ou configurez un volume persistant pour la production'); warnCount++ }

console.log('\nRésumé: OK=%d WARN=%d FAIL=%d', okCount, warnCount, failCount)
if (failCount) process.exit(1)
process.exit(0)
