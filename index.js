'use strict'
// import { setVersionFile } from './src/version';
const path = require('path')
const setVersionFile = require('./src/version');
if (process.env.NODE_ENV === 'production') {
  setVersionFile(path.resolve(__dirname))
  module.exports = require('./build/reload-page.prod.js')
} else {
  setVersionFile(path.resolve(__dirname))
  module.exports = require('./build/reload-page.prod.js')
}