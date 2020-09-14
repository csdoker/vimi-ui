import Vue from 'vue'
import App from './App.vue'

// import vimi from '../packages'
// Vue.use(vimi)

// import vimi from 'vimi-ui'
// Vue.use(vimi)

// import { Button } from 'vimi-ui'
// Vue.component(Button.name, Button)

import { Button } from '../packages'
// Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
