---
title: Tabs
---

## 基础用法

<ClientOnly><tabs-demo-base></tabs-demo-base></ClientOnly>

```vue
<template>
  <div>
    <v-tabs v-model="value" @tab-click="handleClick">
      <v-tab-panel label="选项卡1" name="panel1">内容1</v-tab-panel>
      <v-tab-panel label="选项卡2" name="panel2">内容2</v-tab-panel>
      <v-tab-panel label="选项卡3" name="panel3">内容3</v-tab-panel>
      <v-tab-panel label="选项卡4" name="panel4">内容4</v-tab-panel>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'panel1'
    }
  },
  methods: {
    handleClick(tab) {
      console.log(tab)
    }
  }
}
</script>
```

## 动画效果

::: tip
通过 animate 参数可以选择是否开启选项卡面板的动画效果，默认不开启
:::

<ClientOnly><tabs-demo-animate></tabs-demo-animate></ClientOnly>

```vue
<template>
  <div>
    <v-tabs v-model="value" :animate="true">
      <v-tab-panel label="选项卡1" name="panel1">内容1</v-tab-panel>
      <v-tab-panel label="选项卡2" name="panel2">内容2</v-tab-panel>
      <v-tab-panel label="选项卡3" name="panel3">内容3</v-tab-panel>
      <v-tab-panel label="选项卡4" name="panel4">内容4</v-tab-panel>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'panel1'
    }
  }
}
</script>
```

## 禁用状态

<ClientOnly><tabs-demo-disabled></tabs-demo-disabled></ClientOnly>

```vue
<template>
  <div>
    <v-tabs v-model="value">
      <v-tab-panel label="选项卡1" name="panel1">内容1</v-tab-panel>
      <v-tab-panel label="选项卡2" name="panel2" disabled>内容2</v-tab-panel>
      <v-tab-panel label="选项卡3" name="panel3">内容3</v-tab-panel>
      <v-tab-panel label="选项卡4" name="panel4">内容4</v-tab-panel>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'panel1'
    }
  }
}
</script>
```
