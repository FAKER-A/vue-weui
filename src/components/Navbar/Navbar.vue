<template>
  <div class="weui-tab">
    <slot></slot>
    <weui-navbar-header
      :tabs="tabs"
      :active="value"
      @activeChange="activeChange">
    </weui-navbar-header>
    <weui-navbar-body :tabs="tabs" :active="value"></weui-navbar-body>
  </div>
</template>

<script>
import WeuiNavbarHeader from './NavbarHeader.vue';
import WeuiNavbarBody from './NavbarBody.vue';

export default {
  name: 'WeuiNavbar',
  components: {
    WeuiNavbarHeader,
    WeuiNavbarBody,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.$on('insertTab', (tab) => {
      this.tabs.push(tab);
    });
  },
  methods: {
    activeChange(name) {
      this.$emit('input', name);
    },
  },
};
</script>
