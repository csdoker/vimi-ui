---
title: Input
---

## 基础用法

<ClientOnly><input-demo-base></input-demo-base></ClientOnly>

```vue
<template>
  <div>
    <v-input v-model="value" placeholder="请输入内容"></v-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```

## 禁用状态

<ClientOnly><input-demo-disabled></input-demo-disabled></ClientOnly>

```vue
<template>
  <div>
    <v-input disabled v-model="value" placeholder="请输入内容"></v-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
