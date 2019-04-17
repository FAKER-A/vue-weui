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
    <weui-panel type="text" :list="list" @rowClick="rowClick">
      <template slot="header">
        文字组合列表
      </template>
    </weui-panel>

    <weui-panel type="appmsg" :list="list" @rowClick="rowClick">
      <template slot="header">
        图文组合列表
      </template>
    </weui-panel>

    <weui-panel type="smallAppmsg" :list="list" @rowClick="rowClick">
      <template slot="header">
        小图文组合列表
      </template>
    </weui-panel>

    <weui-panel type="slot" :list="list">
      <template slot="header">
        自定义列表
      </template>
      <template slot="body" slot-scope="{ row }">
        <div class="weui-media-box weui-media-box_text">
            <h4 class="weui-media-box__title">{{ row.title }}</h4>
            <p class="weui-media-box__desc">{{ row.desc }}</p>
            <ul class="weui-media-box__info">
                <li class="weui-media-box__info__meta">文字来源</li>
                <li class="weui-media-box__info__meta">时间</li>
                <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</li>
            </ul>
        </div>
      </template>
    </weui-panel>
    <weui-button type="primary" @click="asShow = !asShow">按钮</weui-button>
    <weui-action-sheet :show.sync="asShow" :menus="menus" :actions="actions">
      <template slot="title">这是一个标题，可以为一行或者两行。</template>
    </weui-action-sheet>
    <weui-navbar v-model="navActive">
      <weui-navbar-item label="qq飞车" name="feiche">
        <div>我是飞车</div>
      </weui-navbar-item>
      <weui-navbar-item label="英雄联盟" name="lol">
        <div>我是英雄联盟</div>
      </weui-navbar-item>
    </weui-navbar>
    <weui-tabber :active.sync="tabberActive" :menus="tabbermenus">
    </weui-tabber>
    <weui-cells>
      <template slot="title">cells 和 cell 的例子</template>
      <template slot="cells">
        <weui-cell>
      <!-- <template slot="hd">
        <p>标题文字</p>
      </template> -->
      <template slot="bd">
        <p>cell standard</p>
      </template>
      <template slot="ft">
        <div class="weui-cell__ft">说明文字</div>
      </template>
    </weui-cell>
    <weui-cell>
      <template slot="hd">
        <img src="" alt="" style="width:20px;margin-right:5px;display:block">
      </template>
      <template slot="bd">
        <p>标题文字 <weui-badge dot></weui-badge></p>
      </template>
      <template slot="ft">
        <div class="weui-cell__ft">说明文字</div>
      </template>
    </weui-cell>
    <weui-cell access>
      <!-- <template slot="hd">
        <p>标题文字</p>
      </template> -->
      <template slot="bd">
        <p>标题文字<weui-badge >new</weui-badge></p>
      </template>
      <template slot="ft">
        说明文字
      </template>
    </weui-cell>
      </template>
    </weui-cells>
    <weui-slider v-model="percent"></weui-slider>
  </div>
</template>

<script>
import WeuiButton from './components/Button/Button.vue';
import WeuiLoadmore from './components/Loadmore/Loadmore.vue';
import WeuiDialog from './components/Dialog/Dialog.vue';
import WeuiProgress from './components/Progress/Progress.vue';
import WeuiPreview from './components/Preview/Preview.vue';
import WeuiPanel from './components/Panel/Panel.vue';
import WeuiActionSheet from './components/ActionSheet/ActionSheet.vue';
import WeuiNavbar from './components/Navbar/Navbar.vue';
import WeuiNavbarItem from './components/Navbar/NavbarItem.vue';
import WeuiTabber from './components/Tabbar/Tabbar.vue';
import WeuiCell from './components/Cell/Cell.vue';
import WeuiCells from './components/Cell/Cells.vue';
import WeuiBadge from './components/Badge/Badge.vue';
import WeuiSlider from './components/Slider/Slider.vue';

export default {
  name: 'app',
  components: {
    WeuiButton,
    WeuiLoadmore,
    WeuiDialog,
    WeuiProgress,
    WeuiPreview,
    WeuiPanel,
    WeuiActionSheet,
    WeuiNavbar,
    WeuiNavbarItem,
    WeuiTabber,
    WeuiCell,
    WeuiCells,
    WeuiBadge,
    WeuiSlider,
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
      list: [{
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
      }, {
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
      }, {
        title: '标题三',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
      }],
      asShow: false,
      menus: [{
        text: '示例菜单',
      }, {
        text: '示例菜单',
      }, {
        text: '示例菜单',
      }],
      actions: [{
        text: '取消',
      }],
      navActive: 'lol',
      tabberActive: 'qq',
      tabbermenus: [{
        name: 'weixin',
        label: '微信',
      }, {
        name: 'qq',
        label: 'QQ',
      }, {
        name: 'feixin',
        label: '飞信',
      }],
      percent: 0,
    };
  },
  mounted() {
    this.$toast({ status: 'loading', message: '已完成' });
  },
  methods: {
    rowClick({ row, index }) {
      console.log(row, index);
    },
  },
};

</script>

<style lang="scss">
</style>
