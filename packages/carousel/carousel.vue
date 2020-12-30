<template>
  <div class="v-carousel" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="v-carousel-list" :style="{ height: height }" ref="carouselList">
      <slot></slot>
    </div>
    <ul class="v-carousel-dots">
      <li
        class="v-carousel-dot"
        :class="{ active: currentIndex === index }"
        v-for="(item, index) in carouselItems"
        :key="index"
        @click="handleDot(index)"
      ></li>
    </ul>
    <button class="v-carousel-arrow arrow-prev" @click="handleArrowPrev"></button>
    <button class="v-carousel-arrow arrow-next" @click="handleArrowNext"></button>
  </div>
</template>

<script>
export default {
  name: 'VCarousel',
  props: {
    height: String,
    initialIndex: {
      type: Number,
      default: 0
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      carouselItems: [],
      timer: null,
      currentIndex: this.initialIndex,
      isAnimate: false,
      direction: '',
      $fromItem: null,
      $toItem: null
    }
  },
  methods: {
    getPrevIndex () {
      return (
        (this.currentIndex - 1 + this.carouselItems.length) %
        this.carouselItems.length
      )
    },
    getNextIndex () {
      return (this.currentIndex + 1) % this.carouselItems.length
    },
    initCarousel () {
      this.carouselItems = this.$children.filter(
        item => item.$options.name === 'VCarouselItem'
      )
      this.carouselItems.forEach((item, index) => {
        if (this.initialIndex === index) {
          item.$el.classList.add('active')
        }
      })
    },
    resetCarousel () {
      this.$fromItem.setAttribute('class', 'v-carousel-item')
      this.$toItem.setAttribute('class', 'v-carousel-item active')
      this.$refs.carouselList.classList.remove(`${this.direction}`)
      this.isAnimate = false
    },
    moveCarousel () {
      this.isAnimate = true
      const type = this.direction === 'left' ? 'next' : 'prev'
      this.$toItem.setAttribute('class', `v-carousel-item ${type}`)
      this.$refs.carouselList.classList.add(`${this.direction}`)
    },
    setCarousel (toIndex, direction) {
      if (!this.isAnimate) {
        this.$fromItem = this.carouselItems[this.currentIndex].$el
        this.$toItem = this.carouselItems[toIndex].$el
        this.direction = direction
        this.currentIndex = toIndex
        this.moveCarousel()
      }
    },
    playCarousel () {
      if (this.autoplay && !this.timer) {
        this.timer = setInterval(() => {
          this.setCarousel(this.getNextIndex(), 'left')
        }, this.interval)
      }
    },
    bindCarousel () {
      this.$refs.carouselList.addEventListener('transitionend', this.resetCarousel, false)
    },
    pauseCarousel () {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    handleDot (index) {
      if (this.currentIndex !== index) {
        const direction = this.currentIndex > index ? 'right' : 'left'
        this.setCarousel(index, direction)
      }
    },
    handleArrowPrev () {
      this.setCarousel(this.getPrevIndex(), 'right')
    },
    handleArrowNext () {
      this.setCarousel(this.getNextIndex(), 'left')
    },
    handleMouseEnter () {
      if (this.autoplay) {
        this.pauseCarousel()
      }
    },
    handleMouseLeave () {
      if (this.autoplay) {
        this.playCarousel()
      }
    }
  },
  beforeDestroy () {
    this.$refs.carouselList.removeEventListener('transitionend', this.resetCarousel, false)
  },
  mounted () {
    this.initCarousel()
    this.bindCarousel()
    this.playCarousel()
  }
}
</script>
