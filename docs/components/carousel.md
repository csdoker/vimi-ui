---
title: Carousel
---

## 基础用法

<ClientOnly><carousel-demo-base></carousel-demo-base></ClientOnly>

```vue
<template>
  <v-carousel height="300px">
    <v-carousel-item v-for="item in 4" :key="item">
      <div class="carousel-content">{{ item }}</div>
    </v-carousel-item>
  </v-carousel>
</template>
```
