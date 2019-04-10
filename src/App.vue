<template>
  <div id="app">
    <weui-button>按钮</weui-button>
    <weui-button type="primary">按钮</weui-button>
    <weui-button type="warn">按钮</weui-button>
    <weui-button type="primary" disabled>按钮</weui-button>
    <weui-button type="primary">按钮</weui-button>
    <weui-button size="mini">按钮</weui-button>
    <weui-loadmore type="loading"></weui-loadmore>
    <weui-loadmore type="noData"></weui-loadmore>
    <weui-loadmore type="dot"></weui-loadmore>
    <weui-loadmore type="noData">没有数据哦～～</weui-loadmore>
  </div>
</template>

<script>
import WeuiButton from './components/Button/Button.vue';
import WeuiLoadmore from './components/Loadmore/Loadmore.vue';

export default {
  name: 'app',
  components: {
    WeuiButton,
    WeuiLoadmore,
  },
  mounted() {
    this.$toast({ status: 'loading', message: '已完成' });
  },
};

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
