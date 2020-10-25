<template>
  <label class="v-checkbox">
    <span class="v-checkbox-wrapper">
      <span class="v-checkbox-inner"></span>
      <input type="checkbox" class="v-checkbox-input" />
    </span>
    <span class="v-checkbox-label"></span>
  </label>
</template>

<script>
export default {
  name: 'VCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
