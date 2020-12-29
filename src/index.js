import '../assets/font/iconfont.css'
import Icon from '../packages/icon'
import Button from '../packages/button'
import ButtonGroup from '../packages/button-group'
import Switch from '../packages/switch'
import Checkbox from '../packages/checkbox'
import Input from '../packages/input'
import Tabs from '../packages/tabs'
import TabPanel from '../packages/tab-panel'
import Pager from '../packages/pager'
import Carousel from '../packages/carousel'
import CarouselItem from '../packages/carousel-item'

const components = {
  Icon,
  Button,
  ButtonGroup,
  Switch,
  Checkbox,
  Input,
  Tabs,
  TabPanel,
  Pager,
  Carousel,
  CarouselItem
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

// export {
//   install,
//   Icon,
//   Button,
//   ButtonGroup,
//   Switch,
//   Checkbox,
//   Input,
//   Tabs,
//   TabPanel,
//   Pager
// }

export default {
  install,
  ...components
}
