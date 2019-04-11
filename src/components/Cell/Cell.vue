<template>
  <div
    class="weui-cell"
    :class="{ 'weui-cell_access': access }"
    @click="cellClick">
    <div class="weui-cell__hd">
      <slot name="hd"></slot>
    </div>
    <div class="weui-cell__bd">
      <slot name="bd"></slot>
    </div>
    <div class="weui-cell__ft">
      <slot name="ft"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeuiCell',
  props: {
    access: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    cellClick(e) {
      this.$emit('cellClick', e);
    },
  },
};
</script>
