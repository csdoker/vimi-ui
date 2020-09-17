<template>
  <div class="v-switch" :class="switchClass" @click="change">
    <input type="checkbox" class="v-switch-input" />
    <span class="v-switch-core"></span>
  </div>
</template>

<script>
export default {
  name: 'VSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isChecked: this.value
    }
  },
  computed: {
    switchClass () {
      return {
        checked: this.isChecked
      }
    }
  },
  methods: {
    change () {
      this.isChecked = !this.isChecked
      this.$emit('input', this.isChecked)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
