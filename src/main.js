import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './views/Header'
import Footer from "./views/Footer";

Vue.config.productionTip = false;
// 注册全局组件
Vue.component('Header', Header);
Vue.component('Footer', Footer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
