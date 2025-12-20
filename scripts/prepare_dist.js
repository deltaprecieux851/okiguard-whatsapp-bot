const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const out = path.join(root, 'dist')
if (fs.existsSync(out)) {
  fs.rmSync(out, { recursive: true, force: true })
}
fs.mkdirSync(out)

function copyRecursive(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true })
    for (const f of fs.readdirSync(src)) {
      if (['node_modules', '.git', 'sessions', 'tmp', 'dist'].includes(f)) continue
      copyRecursive(path.join(src,f), path.join(dest,f))
    }
  } else {
    fs.copyFileSync(src,dest)
  }
}

const include = ['package.json','README.md','src','Dockerfile','docker-compose.yml','DEPLOY_RENDER.md']
for (const p of include) {
  const src = path.join(root,p)
  if (fs.existsSync(src)) copyRecursive(src, path.join(out,p))
}
console.log('Dist prepared at', out)
