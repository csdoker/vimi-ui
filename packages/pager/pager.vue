<template>
  <ul class="v-pager" :class="{ hide: hideOnSinglePage && pageCount <= 1 }">
    <li
      class="pager-prev"
      @click="handlePrevPage"
      :class="{ disabled: currentPage === 1 }"
    >
      <v-icon name="arrow-left"></v-icon>
    </li>
    <template v-for="(page, index) in pages">
      <template v-if="page === currentPage">
        <li class="pager-item active" :key="index">{{ page }}</li>
      </template>
      <template v-else-if="page === '···'">
        <li class="pager-more" :key="index">···</li>
      </template>
      <template v-else>
        <li class="pager-item" :key="index" @click="handleChangePage(page)">{{ page }}</li>
      </template>
    </template>
    <li
      class="pager-next"
      @click="handleNextPage"
      :class="{ disabled: currentPage === pageCount }"
    >
      <v-icon name="arrow-right"></v-icon>
    </li>
  </ul>
</template>

<script>
import VIcon from '../icon/icon.vue'

export default {
  name: 'VPager',
  components: {
    'v-icon': VIcon
  },
  props: {
    total: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    current: {
      type: Number,
      default: 1
    },
    hideOnSinglePage: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currentPage: this.current
    }
  },
  watch: {
    current (value) {
      this.currentPage = value
    },
    currentPage () {
      this.$emit('current-change', this.currentPage)
    }
  },
  computed: {
    pageCount () {
      let pageCount = 0
      if (this.total % this.pageSize === 0) {
        pageCount = this.total / this.pageSize
      } else {
        pageCount =
          (this.total - (this.total % this.pageSize)) / this.pageSize + 1
      }
      return pageCount
    },
    pages () {
      const pages = [
        1,
        this.pageCount,
        this.currentPage,
        this.currentPage - 1,
        this.currentPage - 2,
        this.currentPage + 1,
        this.currentPage + 2
      ]
      const pageNumbers = [
        ...new Set(
          pages.filter(page => page >= 1 && page <= this.pageCount).sort((a, b) => a - b)
        )
      ]
      const pageItems = pageNumbers.reduce((items, current, index, array) => {
        items.push(current)
        if (array[index + 1] && array[index + 1] - array[index] > 1) {
          items.push('···')
        }
        return items
      }, [])
      return pageItems
    }
  },
  methods: {
    handlePrevPage () {
      this.currentPage = this.currentPage - 1
      if (this.currentPage >= 1) {
        this.$emit('update:current', this.currentPage)
      }
    },
    handleNextPage () {
      this.currentPage = this.currentPage + 1
      if (this.currentPage <= this.pageCount) {
        this.$emit('update:current', this.currentPage)
      }
    },
    handleChangePage (currentPage) {
      this.currentPage = currentPage
      this.$emit('update:current', this.currentPage)
    }
  }
}
</script>
