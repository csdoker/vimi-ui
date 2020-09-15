<template>
  <button
    class="v-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <v-icon class="icon" v-if="icon && !loading" :name="icon"></v-icon>
    <v-icon class="loading icon" v-if="loading" name="loading"></v-icon>
    <div class="v-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import VIcon from '~/icon/src/index.vue'

export default {
  name: 'VButton',
  // props: ['icon', 'iconPosition']
  components: {
    'v-icon': VIcon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "styles/_var";

.v-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .v-button-content {
    order: 2;
    // line-height: var(--line-height);
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  &.icon-right {
    > .v-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading {
    @include spin;
  }
  & + & {
    margin-left: 4px;
  }
}
</style>
