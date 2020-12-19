<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock'
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 16px;
}
</style>
