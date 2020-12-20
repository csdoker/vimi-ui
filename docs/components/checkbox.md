---
title: Checkbox
---

## 基础用法

<ClientOnly><checkbox-demo-base></checkbox-demo-base></ClientOnly>

```vue
<template>
  <div>
    <v-checkbox v-model="value1"></v-checkbox>
    <v-checkbox v-model="value2">备选项</v-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: false,
      value2: true
    }
  }
}
</script>
```

## 禁用状态

<ClientOnly><checkbox-demo-disabled></checkbox-demo-disabled></ClientOnly>

```vue
<template>
  <div>
    <v-checkbox v-model="value1" :disabled="true">备选项1</v-checkbox>
    <v-checkbox v-model="value2" :disabled="true">备选项2</v-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: false,
      value2: true
    }
  }
}
</script>
```

## 事件监听

:::tip
当状态改变的时候会触发change事件
:::

```vue
<template>
  <div>
    <v-checkbox v-model="value" @change="handleChange">备选项</v-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false
    }
  },
  method: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>
```
