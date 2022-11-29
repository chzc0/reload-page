# reload-page
### After the front end releases, the page can be refreshed automatically.



## Use

```shell
npm install reload-page
```

```javascript
// main.js

import { spaUpdate } from 'reload-page';

spaUpdate()
```
# Set Version

## Vite

```javascript
// vite.config.js

import setVersionFile from 'reload-page/src/version';
const path = require('path')

export default defineConfig({
  plugins: [
    setVersionFile(path.resolve(__dirname, "./public")),
  ]
})
```
## Vue CLI

```javascript
// vue.config.js

const setVersionFile = require('reload-page/src/version')
const path = require('path')

module.exports = defineConfig({
  chainWebpack() {
    setVersionFile(path.resolve(__dirname, "./public"))
  }
})
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/js-sha512  
Author: Chen, Yi-Cyuan (emn178@gmail.com)
