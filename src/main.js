/**
 * main.js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index';
import vueG from 'vueg'
import '../static/css/transition-min.css'

Vue.use(vueG, router, {
  forwardAnim: 'fadeInRight',
  backAnim: 'fadeInRight',
  shadow: false,
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
