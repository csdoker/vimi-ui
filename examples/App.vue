<template>
  <div id="app">
    <div class="container">
      <h2>Button 按钮</h2>
      <v-button type="primary">Primary</v-button>
      <v-button>Default</v-button>
      <v-button type="dashed">Dashed</v-button>
      <v-button type="danger">Danger</v-button>
      <v-button :disabled="true">Disabled</v-button>
      <v-button :loading="true">Default</v-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
