<template>
  <label class="v-switch" :class="{ checked: this.checked, disabled: this.disabled }">
    <span class="v-switch-core" :style="styles"></span>
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
    activeColor: {
      type: String,
      default: '#409EFF'
    },
    inactiveColor: {
      type: String,
      default: '#dcdfe6'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked () {
      return this.value === this.activeValue
    },
    styles () {
      const color = this.checked ? this.activeColor : this.inactiveColor
      return {
        borderColor: color,
        backgroundColor: color
      }
    }
  },
  methods: {
    getValue () {
      return !this.checked ? this.activeValue : this.inactiveValue
    },
    handleChange (value) {
      this.$emit('input', this.getValue())
      this.$emit('change', this.getValue())
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
