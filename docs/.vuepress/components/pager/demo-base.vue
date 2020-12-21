<template>
  <demo-block>
    <v-pager :total="100" :current.sync="currentPage" :page-size="10" @current-change="handleChangePage"></v-pager>
  </demo-block>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    handleChangePage (value) {
      console.log(value)
    }
  }
}
</script>