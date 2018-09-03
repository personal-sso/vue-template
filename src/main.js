/**
 * main.js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueX from 'vuex'
import vueG from 'vueg'
import '../static/css/transition-min.css'

Vue.use(VueX);
Vue.use(vueG, router, {
  forwardAnim: 'fadeInRight',
  backAnim: 'fadeInRight',
  shadow: false,
});
const store = new VueX.Store({
  state: {
    // page3: {
    //   forwardAnim: 'fadeInRight',
    //   duration: '0.3',
    //   backAnim: 'fadeInLeft'
    // }
  },
  mutations: {
    setState(state, val) {
      state[val.key] = val.value
    }
  }
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
