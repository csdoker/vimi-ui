---
title: Button
---

## 基础用法

<ClientOnly><button-demo-base></button-demo-base></ClientOnly>

```vue
<v-button type="primary">Primary</v-button>
<v-button>Default</v-button>
<v-button type="dashed">Dashed</v-button>
<v-button type="danger">Danger</v-button>
```

## 禁用状态

<ClientOnly><button-demo-disabled></button-demo-disabled></ClientOnly>

```vue
<v-button :disabled="true">Disabled</v-button>
```

## 加载中

<ClientOnly><button-demo-loading></button-demo-loading></ClientOnly>

```vue
<v-button :loading="true">Default</v-button>
```

## 按钮组

<ClientOnly><button-demo-group></button-demo-group></ClientOnly>

```vue
<v-button-group>
  <v-button>上一页</v-button>
  <v-button>更多</v-button>
  <v-button>下一页</v-button>
</v-button-group>
```
