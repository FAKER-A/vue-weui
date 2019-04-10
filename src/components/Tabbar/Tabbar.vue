<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">

    </div>
    <div class="weui-tabbar">
      <a href="javascript:;"
        v-for="(item, index) in menus"
        :key="index"
        class="weui-tabbar__item"
        :class="{ 'weui-bar__item_on': active === item.name }"
        @click="menuClick(item)">
          <slot :menu="item" :index="index">
            <img :src="item.icon" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">{{ item.label }}</p>
          </slot>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
    active: {
      type: String,
      default: '',
    },
  },
  methods: {
    menuClick(item) {
      this.$emit('menuClick', item);
      this.$emit('update:active', item.name);
    },
  },
};
</script>
