<template>
  <div class="v-tab-panel" :class="{'active': visible}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VTabPanel',
  inject: ['tabs'],
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    visible () {
      return this.name === this.tabs.activeKey
    }
  }
}
</script>
