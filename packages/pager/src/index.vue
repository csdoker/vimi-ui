<template>
  <ul class="v-pager">
    <li class="pager-prev disabled">&lt;</li>
    <li class="pager-item active">1</li>
    <li class="pager-item">2</li>
    <li class="pager-item">3</li>
    <li class="pager-more">···</li>
    <li class="pager-item">10</li>
    <li class="pager-next">&gt;</li>
  </ul>
</template>

<script>
export default {
  name: 'VPager'
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
