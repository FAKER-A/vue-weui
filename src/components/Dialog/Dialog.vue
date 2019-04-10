<template>
  <div v-show="show">
    <div class="weui-mask"></div>
    <div class="weui-dialog">
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title"><slot name="title"></slot></strong>
      </div>
      <div class="weui-dialog__bd">
        <slot name="body"></slot>
      </div>
      <div class="weui-dialog__ft">
        <a
          href="javascript:;"
          class="weui-dialog__btn weui-dialog__btn_default"
          @click="close"
          v-show="!noCancel">
          {{ cancelText }}
        </a>
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="close">
          {{ confirmText }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeuiDialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    noCancel: {
      type: Boolean,
      default: false,
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    confirmText: {
      type: String,
      default: '确认',
    },
  },
  methods: {
    close() {
      this.$emit('update:show', false);
    },
  },
};
</script>
