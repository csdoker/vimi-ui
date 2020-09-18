<template>
  <div id="app">
    <div class="container">
      <h2>Button 按钮</h2>
      <div class="item">
        <v-button type="primary">Primary</v-button>
        <v-button>Default</v-button>
        <v-button type="dashed">Dashed</v-button>
        <v-button type="danger">Danger</v-button>
        <v-button :disabled="true">Disabled</v-button>
        <v-button :loading="true">Default</v-button>
      </div>
      <div class="item">
        <v-button-group>
          <v-button>上一页</v-button>
          <v-button>更多</v-button>
          <v-button>下一页</v-button>
        </v-button-group>
      </div>
    </div>
    <div class="container">
      <h2>Switch 开关</h2>
      <div class="item">
        <v-switch v-model="switchValue1" :active-value="'active'" :inactive-value="'inactiveValue'" @input="handleSwitch1" style="margin-right: 20px;"></v-switch>
        <v-switch v-model="switchValue1" disabled @input="handleSwitch2" style="margin-right: 20px;"></v-switch>
        <v-switch v-model="switchValue2" disabled></v-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      switchValue1: false,
      switchValue2: true
    }
  },
  methods: {
    handleSwitch1 (value) {
      console.log(this.switchValue1)
    },
    handleSwitch2 () {
      console.log(this.switchValue2)
    }
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 16px;
}
.container h2 {
  margin: 20px 0;
}
.container .item {
  display: flex;
  margin-bottom: 10px;
}
</style>
