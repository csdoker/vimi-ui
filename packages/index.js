import '../src/assets/font/iconfont.css'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'
import Switch from './switch'
import Input from './input'
import Tabs from './tabs'
import TabPanel from './tab-panel'

const components = {
  Icon,
  Button,
  ButtonGroup,
  Switch,
  Input,
  Tabs,
  TabPanel
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
  Input,
  Tabs,
  TabPanel
}

export default {
  install
}
