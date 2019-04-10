<template>
  <div id="actionSheet_wrap" v-show="show">
    <div
      class="weui-mask actionsheet__mask"
      @click="close"></div>
    <div
      class="weui-actionsheet"
      :class="{ 'weui-actionsheet_toggle': show }">
      <div class="weui-actionsheet__title">
        <p class="weui-actionsheet__title-text">
          <slot name="title"></slot>
        </p>
      </div>
      <div class="weui-actionsheet__menu" >
        <div class="weui-actionsheet__cell"
          v-for="(item, index) in menus"
          :key="index"
          @click="menuClick(item)">
          {{ item.text }}
        </div>
      </div>
      <div class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell"
          v-for="(item, index) in actions"
          :key="index"
          @click="actionClick(item)" >
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeuiActionSheet',
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
    actions: {
      type: Array,
      default: () => [],
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    actionClick(action) {
      this.$emit('actionClick', action);
      this.close();
    },
    menuClick(menu) {
      this.$emit('menuClick', menu);
    },
    close() {
      this.$emit('update:show', false);
    },
  },
};
</script>
