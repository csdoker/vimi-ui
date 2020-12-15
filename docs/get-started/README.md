---
title: 快速开始
---

### Global Use

```javascript
// Global
import Vue from 'vue'
import vimi from 'vimi-ui'
import "vimi-ui/lib/styles/index.css";

Vue.use(vimi)
```

### On-demand Loading

Firstly, you should install babel-plugin-component in your project.

```bash
npm i babel-plugin-component -D
```

Then, configure your .babelrc file like this

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "vimi-ui",
        "styleLibrary": {
          "name": "styles",
          "base": false
        }
      }
    ]
  ]
}
```

Finally, you can import component on demand, and you don't need to care about importing styles, the babel plugin will do it automaticly.

```javascript
import Vue from 'vue'
import { Button } from 'vimi-ui'

Vue.component(Button.name, Button)
```
