<template>
  <demo-block>
    <v-switch v-model="value" active-color="#67C23A" inactive-color="#F56C6C"></v-switch>
  </demo-block>
</template>

<script>
export default {
  data() {
    return {
      value: true
    }
  }
}
</script>