<template>
  <div style="padding: 100px;">
    <div class="box">
      <g-button :loading="loading1" @click="loading1 = !loading1">按钮</g-button>
      <g-button icon="settings" :loading="loading2" @click="loading2 = !loading2">按钮</g-button>
      <g-button
        icon="settings"
        icon-position="right"
        :loading="loading3"
        @click="loading3 = !loading3"
      >按钮</g-button>
      <!-- <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group> -->
    </div>
  </div>
</template>

<script>
import GButton from './button/button'
// import GButtonGroup from './button/button-group'

export default {
  name: 'demo',
  components: {
    GButton
    // GButtonGroup
  },
  data () {
    return {
      loading1: false,
      loading2: true,
      loading3: false
    }
  },
  methods: {}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// img {
//   max-width: 100%;
// }

// html {
//   --button-height: 32px;
//   --font-size: 14px;
//   --line-height: 14px;
//   --button-bg: white;
//   --button-active-bg: #eee;
//   --border-radius: 4px;
//   --color: #333;
//   --border-color: #999;
//   --border-color-hover: #666;
// }

// body {
//   font-size: var(--font-size);
// }
</style>
