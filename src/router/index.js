/**
 * index.js
 */

import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../page/home/home.vue'
// import List from '../page/list/list.vue'

Vue.use(Router);

const home = r => require.ensure([], () => r(require('@/page/home/home.vue')), 'home');
const list = r => require.ensure([], () => r(require('@/page/list/list.vue')), 'list');

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/list',
    component: list
  }
];

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/list',
//       name: 'list',
//       component: List
//     }
//   ]
// })

export default new Router({
  mode: 'history',
  routes,
  strict: process.env.NODE_ENV !== 'production',
})
