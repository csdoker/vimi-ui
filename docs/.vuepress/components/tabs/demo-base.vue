<template>
  <demo-block>
    <v-tabs v-model="value" @tab-click="handleClick">
      <v-tab-panel label="选项卡1" name="panel1">内容1</v-tab-panel>
      <v-tab-panel label="选项卡2" name="panel2">内容2</v-tab-panel>
      <v-tab-panel label="选项卡3" name="panel3">内容3</v-tab-panel>
      <v-tab-panel label="选项卡4" name="panel4">内容4</v-tab-panel>
    </v-tabs>
  </demo-block>
</template>

<script>
export default {
  data() {
    return {
      value: 'panel1'
    }
  },
  methods: {
    handleClick(tab) {
      console.log(tab)
    }
  }
}
</script>
