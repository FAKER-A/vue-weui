
<script>
export default {
  name: 'WeuiNavbarItem',
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  created() {
    this.$parent.$emit('insertTab', {
      label: this.label,
      name: this.name,
      render: this.$slots.default,
    });
  },
  render() {
    return <div style="display:none"></div>;
  },
};
</script>
