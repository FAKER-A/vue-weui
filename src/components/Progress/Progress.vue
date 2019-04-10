<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <div class="weui-progress__inner-bar" :style="style"></div>
    </div>
    <a href="javascript:;" class="weui-progress__opr" @click="close" v-show="canClose">
        <i class="weui-icon-cancel"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'WeuiProgress',
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    canClose: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    style() {
      return {
        width: `${this.percent}%`,
      };
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
