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

<style lang="scss" scoped>
@import "styles/common";
@import "styles/color";

$height: $input-height;

.v-input {
  display: inline-block;
  width: 100%;
  font-size: $font-size;
  .v-input-inner {
    display: inline-block;
    width: 100%;
    height: $height;
    line-height: $height;
    border: 1px solid $border-color-base;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    color: $text-color-regular;
    background-color: #fff;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.2s;
    &::placeholder {
      color: #C0C4CC;
    }
    &:hover {
      border-color: #C0C4CC;
    }
    &:focus {
      outline: none;
      border-color: $primary-color;
    }
    &[disabled],
    &[readonly] {
      background-color: #F5F7FA;
      border-color: #E4E7ED;
      color: #C0C4CC;
      cursor: not-allowed;
    }
  }
}
</style>
