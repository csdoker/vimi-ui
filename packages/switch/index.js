import VSwitch from './src/index.vue'

VSwitch.install = function (Vue) {
  Vue.component(VSwitch.name, VSwitch)
}

export default VSwitch
