---
title: Pager
---

## 基础用法

<ClientOnly><pager-demo-base></pager-demo-base></ClientOnly>

```vue
<template>
  <div>
    <v-pager :total="100" :current.sync="currentPage" :page-size="10" @current-change="handleChangePage"></v-pager>
  </div>
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
```