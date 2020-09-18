<template>
  <label class="v-switch" :class="{ checked: this.checked, disabled: this.disabled }">
    <span class="v-switch-core"></span>
    <input
      type="checkbox"
      class="v-switch-input"
      :value="value"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="disabled"
      @change="handleChange"
    />
  </label>
</template>

<script>
export default {
  name: 'VSwitch',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked () {
      return this.value === this.activeValue
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
