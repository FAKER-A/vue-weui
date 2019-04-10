<template>
  <div id="toast">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-icon_toast" :class="iconClass"></i>
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
  computed: {
    iconClass() {
      let classArr = '';
      switch (this.status) {
        case 'loading':
          classArr = 'weui-loading';
          break;
        case 'success':
        default:
          classArr = 'weui-icon-success-no-circle';
      }
      return classArr;
    },
  },
};
</script>
