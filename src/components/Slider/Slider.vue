<template>
  <div class="weui-slider-box">
    <div class="weui-slider">
      <div class="weui-slider__inner" :ref="refInner">
        <div
          class="weui-slider__track"
          :style="{ width: trackAndHandlerLeft }"
          :ref="refTrack">
        </div>
        <div
          class="weui-slider__handler"
          :style="{ left: trackAndHandlerLeft }"
          :ref="refHandler">
        </div>
      </div>
    </div>
    <div v-show="!noValue" class="weui-slider-box__value" >{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'WeuiSlider',
  props: {
    noValue: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      randomID: Math.ceil(Math.random() * Math.random() * 1000),
    };
  },
  computed: {
    refTrack() {
      return `track_${this.randomID}`;
    },
    refHandler() {
      return `handler_${this.randomID}`;
    },
    refInner() {
      return `Inner_${this.randomID}`;
    },
    trackAndHandlerLeft() {
      return `${this.value}%`;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const handler = this.$refs[this.refHandler];
      const inner = this.$refs[this.refInner];
      const total = inner.clientWidth;
      console.log('total', total);
      let startLeft = 0;
      let startX = 0;
      handler.addEventListener('touchstart', (e) => {
        startLeft = parseInt(handler.offsetLeft, 10) * total / 100;
        startX = e.changedTouches[0].clientX;
      });
      handler.addEventListener('touchmove', (e) => {
        let dist = startLeft + e.changedTouches[0].clientX - startX;
        let percent = 0;
        if (dist < 0) dist = 0;
        if (dist > total) dist = total;
        percent = parseInt(dist / total * 100, 10);
        this.$emit('input', percent);
        e.preventDefault();
      });
      handler.addEventListener('touchend', (e) => {
        startLeft = parseInt(handler.offsetLeft, 10) * total / 100;
        startX = e.changedTouches[0].clientX;
      });
    },
  },
};
</script>
