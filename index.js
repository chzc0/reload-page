'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./build/reload-page.prod.js')
} else {
  module.exports = require('./build/reload-page.prod.js')
}
