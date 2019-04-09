import Vue from 'vue';
import App from './App.vue';
import 'weui/dist/style/weui.min.css';
import './components/Toast';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
