<template>
  <div :class="wrapperClass">
    <i class="weui-loading" v-show="showLoading"></i>
    <span class="weui-loadmore__tips"><slot>{{ tipMsg }}</slot></span>
  </div>
</template>

<script>
export default {
  name: 'WeuiLoadmore',
  props: {
    type: {
      type: String,
      default: 'dot', // loading  noData  dot
    },
  },
  computed: {
    wrapperClass() {
      let classArr = ['weui-loadmore'];
      if (this.type === 'noData') classArr = [...classArr, ' weui-loadmore_line'];
      if (this.type === 'dot') classArr = [...classArr, ' weui-loadmore_line', 'weui-loadmore_dot'];
      return classArr;
    },
    showLoading() {
      return this.type === 'loading';
    },
    tipMsg() {
      let msg = '';
      switch (this.type) {
        case 'loading':
          msg = '正在加载';
          break;
        case 'noData':
          msg = '暂无数据';
          break;
        case 'dot':
        default:
      }
      return msg;
    },
  },
};
</script>
