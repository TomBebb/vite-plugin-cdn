# vite-plugin-cdn-map

Use native browser import-maps in vite for CDN resolution. What's [import-maps](https://github.com/WICG/import-maps)

This plugin by default tries to resolve all dependencies as CDN libraries.

[![NPM](https://nodei.co/npm/vite-plugin-map-cdn.png)](https://npmjs.org/package/vite-plugin-import-maps/)

## Usage

Simply add CDN plugin in vite.config

```javascript
// vite.config.js
const { defineConfig } = require('vite')
import cdn from 'vite-plugin-map-cdn'

export default defineConfig({
  plugins: [
    cdn({cdn: "unpkg.sh"})
  ],
})
```

Then your module will import from cdn instead of vite pre-bundling it.

Because this solution uses native import-maps, itt also allow you to use module in runtime:

```html
<!-- index.html -->
<script type="module">
  import _, { isNaN } from 'lodash'

  console.log(_.isNaN(NaN)) // true
  console.log(isNaN(NaN)) // true
</script>
```
## License

[MIT](LICENSE)
