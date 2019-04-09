import Vue from 'vue';
import Toast from './Toast.vue';

const toast = ({ status = 'success', message, timeout = 2000 }) => {
  const Profile = Vue.extend(Toast);
  const instance = new Profile({
    propsData: {
      status,
      message,
    },
  });
  const div = document.createElement('div');
  document.body.appendChild(div);
  instance.$mount(div);
  let time = timeout;
  const timer = setInterval(() => {
    time -= 1000;
    if (time <= 0) {
      clearInterval(timer);
      instance.$el.parentNode.removeChild(instance.$el);
      instance.$destroy();
    }
  }, 1000);
};
Vue.prototype.$toast = toast;
