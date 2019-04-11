<template>
  <div class="weui-badge" :class="{ 'weui-badge_dot': dot }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WeuiBadge',
  props: {
    dot: Boolean,
  },
};
</script>
