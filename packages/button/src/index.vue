<template>
  <button
    class="v-button"
    :class="buttonClass"
    @click="$emit('click')"
    :disabled="disabled || loading"
  >
    <v-icon class="v-icon" v-if="icon && !loading" :name="icon"></v-icon>
    <v-icon class="loading v-icon" v-if="loading" name="loading"></v-icon>
    <span class="v-button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import VIcon from '~/icon/src/index.vue'

export default {
  name: 'VButton',
  components: {
    'v-icon': VIcon
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass () {
      const types = ['default', 'primary', 'dashed', 'danger']
      return {
        [`v-button-${this.type}`]: types.includes(this.type),
        disabled: this.disabled
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
