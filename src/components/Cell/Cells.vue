<template>
  <div>
    <div class="weui-cells__title">
      <slot name="title"></slot>
    </div>
    <div class="weui-cells">
      <slot name="cells"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeuiCells',
};
</script>
