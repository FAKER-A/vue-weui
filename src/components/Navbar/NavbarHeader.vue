<template>
  <div class="weui-navbar">
    <div
      v-for="(item, index) in tabs"
      :key="index"
      class="weui-navbar__item"
      :class="{ 'weui-bar__item_on': item.name === active }"
      @click="tabHeaderClick(item.name)">
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeuiNavbarHeader',
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    active: {
      type: String,
      default: '',
    },
  },
  methods: {
    tabHeaderClick(name) {
      this.$emit('activeChange', name);
    },
  },
};
</script>
