<template>
  <button
    :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'WeuiButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      classPre: 'weui-btn',
    };
  },
  computed: {
    typeClass() {
      return `${this.classPre}_${this.type}`;
    },
    disabledClass() {
      if (!this.disabled) return '';
      return `${this.classPre}_disabled`;
    },
    sizeClass() {
      if (!this.size) return '';
      return `${this.classPre}_${this.size}`;
    },
    classes() {
      return [this.classPre, this.typeClass, this.disabledClass, this.sizeClass];
    },
  },
};
</script>
