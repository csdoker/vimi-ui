<template>
  <demo-block>
    <v-switch v-model="value" disabled></v-switch>
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