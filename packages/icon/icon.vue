<template>
  <i :class="`iconfont icon-${name}`" @click="$emit('click', $event)"></i>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
