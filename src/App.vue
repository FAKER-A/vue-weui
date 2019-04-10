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
    <weui-dialog
      :show.sync="dialog1"
      noCancel>
      <template slot="title">我是标题</template>
      <template slot="body">我是内容</template>
    </weui-dialog>
    <weui-progress :percent="80" ></weui-progress>
    <weui-preview :bodyData="bodyData">
      <template slot="header">
        <label class="weui-form-preview__label">付款金额</label>
        <em class="weui-form-preview__value">¥2400.00</em>
      </template>
      <template slot="footer">
        <a class="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:">操作</a>
      </template>
    </weui-preview>
  </div>
</template>

<script>
import WeuiButton from './components/Button/Button.vue';
import WeuiLoadmore from './components/Loadmore/Loadmore.vue';
import WeuiDialog from './components/Dialog/Dialog.vue';
import WeuiProgress from './components/Progress/Progress.vue';
import WeuiPreview from './components/Preview/Preview.vue';

export default {
  name: 'app',
  components: {
    WeuiButton,
    WeuiLoadmore,
    WeuiDialog,
    WeuiProgress,
    WeuiPreview,
  },
  data() {
    return {
      dialog1: true,
      bodyData: [{
        label: 'lisheng',
        value: '前端',
      }, {
        label: '王晨',
        value: '后端',
      }],
    };
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
