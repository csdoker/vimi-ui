<template>
  <button
    class="v-button"
    @click="$emit('click')"
  >
    <v-icon class="v-icon" v-if="icon && !loading" :name="icon"></v-icon>
    <v-icon class="loading v-icon" v-if="loading" name="loading"></v-icon>
    <div class="v-button-content">
      <slot></slot>
    </div>
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
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
