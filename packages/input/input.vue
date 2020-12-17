<template>
  <div class="v-input">
    <input
      class="v-input-inner"
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'VInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  }
}
</script>
