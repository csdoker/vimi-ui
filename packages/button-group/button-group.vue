<template>
  <div class="v-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VButtonGroup'
//   mounted () {
//     for (const node of this.$el.children) {
//       const name = node.nodeName.toLowerCase()
//       if (name !== 'button') {
//         console.warn(
//           `Child element of 'v-button-group' should be 'v-button', but your child element is ${name}`
//         )
//       }
//     }
//   }
}
</script>
