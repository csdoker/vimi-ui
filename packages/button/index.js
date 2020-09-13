import VButton from './src/index.vue'

VButton.install = function (Vue) {
  Vue.component(VButton.name, VButton)
}

export default VButton
