import vimi from '../../src/index'
import '../../src/styles/index.scss'

import DemoBlock from '../../src/components/demo-block'

export default ({
  Vue
}) => {
  Vue.use(vimi)
  Vue.component(DemoBlock.name, DemoBlock)
}
