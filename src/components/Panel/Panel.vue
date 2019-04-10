<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">
      <slot name="header"></slot>
    </div>
    <div class="weui-panel__bd">
        <template v-for="(item, index) in list">
          <slot name="body" :row="item" :index="index">
            <!-- 图文组合 -->
            <template v-if="type === 'appmsg'">
              <a
                href="javascript:void(0);"
                class="weui-media-box weui-media-box_appmsg"
                @click="click({ row: item, index })"
                :key="index">
                <div class="weui-media-box__hd">
                  <img class="weui-media-box__thumb" :src="item[field.src]" alt="">
                </div>
                <div class="weui-media-box__bd">
                  <h4 class="weui-media-box__title">{{ item[field.title] }}</h4>
                  <p class="weui-media-box__desc">{{ item[field.desc] }}</p>
                </div>
              </a>
            </template>

            <!-- 文字组合 -->
            <template v-if="type === 'text'">
              <div
                class="weui-media-box weui-media-box_text"
                @click="click({ row: item, index })"
                :key="index">
                <h4 class="weui-media-box__title">{{ item[field.title] }}</h4>
                <p class="weui-media-box__desc">{{ item[field.desc] }}</p>
              </div>
            </template>

            <!-- 小图文组合 -->
            <template v-if="type === 'smallAppmsg'">
              <div
                class="weui-media-box weui-media-box_small-appmsg"
                @click="click({ row: item, index })"
                :key="index">
                <div class="weui-cells">
                  <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                      <img
                        :src="item[field.src]"
                        alt=""
                        style="width:20px;margin-right:5px;display:block">
                    </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>{{ item[field.title] }}</p>
                    </div>
                    <span class="weui-cell__ft"></span>
                  </a>
                </div>
              </div>
            </template>
          </slot>
        </template>
        <!-- 图文组合 -->
        <!-- <template v-if="type === 'appmsg'">
          <a
            href="javascript:void(0);"
            class="weui-media-box weui-media-box_appmsg"
            v-for="(item, index) in list"
            :key="index">
            <div class="weui-media-box__hd">
              <img class="weui-media-box__thumb" :src="item[field.src]" alt="">
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">{{ item[field.title] }}</h4>
              <p class="weui-media-box__desc">{{ item[field.desc] }}</p>
            </div>
          </a>
        </template> -->

        <!-- 文字组合 -->
        <!-- <template v-if="type === 'text'">
          <div
            class="weui-media-box weui-media-box_text"
            v-for="(item, index) in list"
            :key="index">
            <h4 class="weui-media-box__title">{{ item[field.title] }}</h4>
            <p class="weui-media-box__desc">{{ item[field.desc] }}</p>
          </div>
        </template> -->

        <!-- 小图文组合 -->
        <!-- <template v-if="type === 'smallAppmsg'">
          <div
            class="weui-media-box weui-media-box_small-appmsg"
            v-for="(item, index) in list"
            :key="index">
            <div class="weui-cells">
              <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                  <img
                    :src="item[field.src]"
                    alt=""
                    style="width:20px;margin-right:5px;display:block">
                </div>
                <div class="weui-cell__bd weui-cell_primary">
                    <p>{{ item[field.title] }}</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
            </div>
          </div>
        </template> -->
    </div>
    <div class="weui-panel__ft">
      <slot>
        <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd">查看更多</div>
          <span class="weui-cell__ft"></span>
        </a>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeuiPanel',
  props: {
    field: {
      type: Object,
      default: () => ({
        src: 'src',
        desc: 'desc',
        title: 'title',
      }),

    },
    list: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'appmsg', // appmsg | text | smallAppmsg | slot
    },
  },
  methods: {
    click({ row, index }) {
      this.$emit('rowClick', { row, index });
    },
  },
};
</script>
