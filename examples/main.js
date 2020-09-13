import Vue from 'vue'
import App from './App.vue'

// import vimi from '../packages'
// Vue.use(vimi)

import { Button } from '../packages'
Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
