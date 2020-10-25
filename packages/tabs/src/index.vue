<template>
  <div class="v-tabs">
    <div class="v-tab-navs" ref="tabNavs">
      <span
        class="v-tab-nav"
        :class="{ active: item.name === activeKey, disabled: item.disabled }"
        v-for="(item, index) in navs"
        :key="index"
        @click="handleChange(index)"
        >{{ item.label }}</span
      >
      <span class="v-tab-bar" ref="tabBar"></span>
    </div>
    <div class="v-tab-panels" :class="{ animated: animate }" ref="tabPanels">
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
      this.activeKey = val
    },
    activeKey () {
      this.updateBar()
      this.updatePanel()
    }
  },
  data () {
    return {
      navs: [],
      activeKey: null
    }
  },
  methods: {
    initTabs () {
      this.getNavs()
      this.activeKey = this.value || this.navs[0].name
    },
    getNavs () {
      const panels = this.$children.filter(item => item.$options.name === 'VTabPanel')
      this.navs = panels.map((panel, index) => {
        return {
          label: panel.label,
          name: panel.name || index,
          disabled: panel.disabled
        }
      })
    },
    updateBar () {
      this.$nextTick(() => {
        const index = this.navs.map(nav => nav.name).indexOf(this.activeKey)
        const $$tabNavs = this.$refs.tabNavs.querySelectorAll('.v-tab-nav')
        if (index !== -1) {
          const { offsetWidth, offsetLeft } = $$tabNavs[index]
          this.$refs.tabBar.style.width = `${offsetWidth}px`
          this.$refs.tabBar.style.transform = `translateX(${offsetLeft}px)`
        }
      })
    },
    updatePanel () {
      const index = this.navs.map(nav => nav.name).indexOf(this.activeKey)
      if (index !== -1) {
        this.$refs.tabPanels.style.transform = `translateX(-${index * 100}%)`
      }
    },
    handleChange (index) {
      if (!this.navs[index].disabled) {
        this.activeKey = this.navs[index].name
        this.$emit('input', this.navs[index].name)
        this.$emit('click', this.navs[index].name)
      }
    }
  },
  mounted () {
    this.initTabs()
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
