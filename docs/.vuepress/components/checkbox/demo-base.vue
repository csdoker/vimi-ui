<template>
  <demo-block>
    <v-checkbox v-model="value1"></v-checkbox>
    <v-checkbox v-model="value2">备选项</v-checkbox>
  </demo-block>
</template>

<script>
export default {
  data() {
    return {
      value1: false,
      value2: true
    }
  }
}
</script>
