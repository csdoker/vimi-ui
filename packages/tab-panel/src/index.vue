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
    }
  },
  watch: {
    name () {
      this.tabs.initTabs()
    },
    label () {
      this.tabs.initTabs()
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    this.tabs.initTabs()
  }
}
</script>
