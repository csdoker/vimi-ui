<template>
  <div class="v-carousel">
    <div class="v-carsouel-list" ref="carouselList">
      <slot></slot>
    </div>
    <ul class="v-carousel-dots">
      <li class="v-carousel-dot"></li>
      <li class="v-carousel-dot"></li>
      <li class="v-carousel-dot"></li>
      <li class="v-carousel-dot"></li>
    </ul>
    <button class="v-carousel-arrow arrow-prev"></button>
    <button class="v-carousel-arrow arrow-next"></button>
  </div>
</template>

<script>
export default {
  name: 'VCarousel',
  props: {
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    this.$refs.carouselList.children[this.initialIndex].classList.add('active')
  }
}
</script>
