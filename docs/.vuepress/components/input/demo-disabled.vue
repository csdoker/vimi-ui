<template>
  <demo-block>
    <v-input disabled v-model="value" placeholder="请输入内容" class="demo-input"></v-input>
  </demo-block>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-input {
  width: 200px;
}
</style>
