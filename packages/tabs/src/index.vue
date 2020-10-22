<template>
  <div class="v-tabs">
    <div class="v-tab-header">
      <span class="v-tab-item active">选项卡1</span>
      <span class="v-tab-item">选项卡2</span>
      <span class="v-tab-item">选项卡3</span>
      <span class="v-tab-item">选项卡4</span>
      <span class="v-tab-line"></span>
    </div>
    <div class="v-tab-panels">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTabs'
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
