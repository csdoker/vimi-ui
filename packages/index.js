import '../src/assets/font/iconfont.css'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'
import Switch from './switch'
import Input from './input'

const components = {
  Icon,
  Button,
  ButtonGroup,
  Switch,
  Input
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
  ButtonGroup,
  Switch,
  Input
}

export default {
  install
}
