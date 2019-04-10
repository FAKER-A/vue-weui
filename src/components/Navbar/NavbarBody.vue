
<script>
export default {
  name: 'WeuiNavbarBody',
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
    classes(name) {
      const arr = ['weui-navbar__item'];
      if (name === this.active) arr.push('weui-bar__item_on');
      return arr.join(' ');
    },
  },
  render() {
    return (
      <div class="weui-tab__panel">
        {
          this.tabs.map(tab => (
          <div style={ tab.name === this.active ? {} : { display: 'none' } } >
            {
              tab.render
            }
          </div>
          ))
        }
      </div>
    );
  },
};
</script>
