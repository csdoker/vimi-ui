<template>
  <div class="v-tabs">
    <div class="v-tab-navs" ref="tabNavs">
      <span
        class="v-tab-nav"
        :class="{'active': item.name === activeKey, 'disabled': item.disabled}"
        v-for="(item, index) in navs"
        :key="index"
        @click="handleChange(index)"
        >{{ item.label }}</span
      >
      <span class="v-tab-bar" ref="tabBar"></span>
    </div>
    <div class="v-tab-panels" :class="{'animated': animate}" ref="tabPanels">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTabs',
  provide () {
    return { tabs: this }
  },
  props: {
    value: {
      type: [String, Number]
    },
    animate: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value (val) {
      const index = this.navs.findIndex(nav => nav.name === val)
      if (!this.navs[index].disabled) {
        this.activeKey = val
      }
    },
    activeKey () {
      this.updatePanel()
      this.updateBar()
    }
  },
  data () {
    return {
      navs: [],
      activeKey: this.value
    }
  },
  methods: {
    getTabs () {
      return this.$children.filter(item => item.$options.name === 'VTabPanel')
    },
    initTabs () {
      this.getActiveKey()
      this.updateNav()
      this.updatePanel()
      this.updateBar()
    },
    getActiveKey () {
      if (!this.activeKey) {
        this.activeKey = this.getTabs()[0].name
      }
    },
    updateNav () {
      this.navs = []
      this.getTabs().forEach((panel, index) => {
        this.navs.push({
          label: panel.label,
          name: panel.name || index,
          disabled: panel.disabled
        })
      })
    },
    updatePanel () {
      this.$nextTick(() => {
        const index = this.navs.findIndex(nav => nav.name === this.activeKey)
        if (index >= 0) {
          this.$refs.tabPanels.style.transform = `translateX(-${index * 100}%)`
          this.getTabs().forEach(
            panel => (panel.visible = panel.name === this.activeKey)
          )
        }
      })
    },
    updateBar () {
      this.$nextTick(() => {
        const index = this.navs.findIndex(nav => nav.name === this.activeKey)
        const $$tabNavs = this.$refs.tabNavs.querySelectorAll('.v-tab-nav')
        if (index >= 0) {
          const { offsetWidth, offsetLeft } = $$tabNavs[index]
          this.$refs.tabBar.style.width = `${offsetWidth}px`
          this.$refs.tabBar.style.transform = `translateX(${offsetLeft}px)`
        }
      })
    },
    handleChange (index) {
      if (!this.navs[index].disabled) {
        this.activeKey = this.navs[index].name
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
