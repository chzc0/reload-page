const { writeFileSync, readFileSync } = require('fs')

function setVersionFile(path) {
  let currentVersion = Date.now()
  const jsfile = readFileSync('./src/reload-page.js')
  writeFileSync(path + '/build/update_popup_version.txt', currentVersion + '', {flag: 'w+'});
  writeFileSync(path + '/build/reload-page.prod.js', `var updateVersion = ${currentVersion};${jsfile}`, {flag: 'w+'});
}

module.exports = setVersionFile