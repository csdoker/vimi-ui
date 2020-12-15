<p align="center">
  <a href="">
    <a href="">
      <img width="200" height="167" src="https://i.loli.net/2020/09/10/ETG4cPSgFdCxWZw.png" />
    </a>
  </a>
</p>

<h1 align="center">vimi-ui</h1>

<h3 align="center">A Vue.js 2.0 UI Toolkit for Web</h3>

<div align="center">

[![npm](https://img.shields.io/npm/v/vimi-ui.svg?style=flat-square)](https://www.npmjs.com/package/vimi-ui)
[![npm](https://img.shields.io/npm/dt/vimi-ui.svg?style=flat-square)](https://www.npmjs.com/package/vimi-ui)
[![npm](https://img.shields.io/npm/l/vimi-ui.svg?style=flat-square)](https://www.npmjs.com/package/vimi-ui)

</div>

<!-- English | [简体中文](./README-zh_CN.md) -->

## Install

```bash
npm install vimi-ui -S
```

## Quick Start

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

<!-- ## Links

- [documentation](https://csdoker.github.io/vimi-ui/) -->

## Development

You can clone this project to the local and run it.

```bash
git clone https://github.com/csdoker/vimi-ui.git
cd vimi-ui
npm install
npm run serve
```

## Todo List

- [x] Button
- [x] Checkbox
- [x] Input
- [x] Switch
- [x] Icon
- [x] Tabs
- [x] Pager
- [ ] Carousel
- [ ] Tree
- [ ] Preview demo and docs online
- [ ] Use Vue3 to refactor component（Doing and need help）
- [ ] Support TypeScript
- [ ] Component unit testing
...

## Reference

This project references some other UI libraries, including design and code. Thanks to these open source community contributors.

- [Element](https://element.eleme.cn/#/zh-CN)
- [Ant Design](https://ant.design/)
- [iView](https://www.iviewui.com/)
- [wheels](https://github.com/FrankFang/wheels)
- [qing](https://github.com/veedrin/qing)
- [yu.js.ui](https://github.com/yurencloud/yu.js.ui/)
- [xy-ui](https://github.com/XboxYan/xy-ui)
- [gulu](https://github.com/FrankFang/gulu)
- [layui](https://www.layui.com/)
- [bootstrap](https://www.bootcss.com/)