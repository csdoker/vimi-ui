import '../src/assets/font/iconfont.css'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'

const components = {
  Icon,
  Button,
  ButtonGroup
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.values(components).forEach(component => {
    Vue.component(component.name, component)
  })
  // Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Icon,
  Button,
  ButtonGroup
}

export default {
  install
}
