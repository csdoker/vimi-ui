<template>
  <label class="v-checkbox" :class="{ checked: this.value, disabled: this.disabled }">
    <span class="v-checkbox-wrapper">
      <span class="v-checkbox-inner"></span>
      <input type="checkbox" :checked="value" :disabled="disabled" @change="handleChange" class="v-checkbox-input" />
    </span>
    <span class="v-checkbox-label" v-if="$slots.default">
      <slot></slot>
    </span>
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
  },
  methods: {
    handleChange (event) {
      const { checked } = event.target
      this.$emit('input', checked)
      this.$emit('change', checked)
    }
  }
}
</script>
