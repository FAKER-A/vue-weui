<template>
  <div class="weui-form-preview">
    <div class="weui-form-preview__hd">
      <slot name="header"></slot>
    </div>
    <div class="weui-form-preview__bd">
        <p v-for="(item, index) in bodyData" :key="index">
            <label class="weui-form-preview__label">{{ item[field.label] }}</label>
            <span class="weui-form-preview__value">{{ item[field.value] }}</span>
        </p>
    </div>
    <div class="weui-form-preview__ft">
      <slot name="footer"></slot>
    </div>
</div>
</template>

<script>
export default {
  name: 'WeuiPreview',
  props: {
    field: {
      type: Object,
      default: () => ({ label: 'label', value: 'value' }),
    },
    bodyData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
