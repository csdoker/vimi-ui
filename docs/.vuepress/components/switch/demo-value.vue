<template>
  <demo-block>
    <v-switch v-model="value" active-value="active" inactive-value="inactiveValue" @change="handleChange"></v-switch>
  </demo-block>
</template>

<script>
export default {
  data() {
    return {
      value: true
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>