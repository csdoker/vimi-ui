---
title: Switch
---

## 基础用法

<ClientOnly><switch-demo-base></switch-demo-base></ClientOnly>

```vue
<template>
  <div>
    <v-switch v-model="value" @change="handleChange"></v-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
```

## 设置背景色

<ClientOnly><switch-demo-color></switch-demo-color></ClientOnly>

```vue
<template>
  <div>
    <v-switch v-model="value" active-color="#67C23A" inactive-color="#F56C6C"></v-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true
    }
  }
}
</script>
```

## 扩展类型

<ClientOnly><switch-demo-value></switch-demo-value></ClientOnly>

```vue
<template>
  <div>
    <v-switch v-model="value" active-value="active" inactive-value="inactiveValue" @change="handleChange"></v-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
```

## 禁用状态

<ClientOnly><switch-demo-disabled></switch-demo-disabled></ClientOnly>

```vue
<template>
  <div>
    <v-switch v-model="value" disabled></v-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true
    }
  }
}
</script>
```