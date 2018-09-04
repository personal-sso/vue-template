/**
 * store入口
 */

import Vue from 'vue';
import VueX from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import state from './rootState';
import login from './modules/Home/home'

Vue.use(VueX);

const store = new VueX.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    login: login,
  }
});
export default store;
