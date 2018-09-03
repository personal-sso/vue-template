/**
 * index.js
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const home = r => require.ensure([], () => r(require('@/page/home/home.vue')), 'home');
const list = r => require.ensure([], () => r(require('@/page/list/list.vue')), 'list');
const good = r => require.ensure([], () => r(require('@/page/good/good.vue')), 'good');

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/list',
    component: list
  },
  {
    path: '/good',
    component: good
  }
];


export default new Router({
  mode: 'history',
  routes,
  strict: process.env.NODE_ENV !== 'production',
})
