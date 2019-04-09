<template>
  <div id="toast">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-icon-success-no-circle weui-icon_toast"></i>
      <p class="weui-toast__content">{{ message }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    status: {
      type: String,
      default: 'success',
    },
    message: {
      type: String,
      default: '',
    },
    timeout: {
      type: Number,
      default: 3000,
    },
  },
};
</script>
