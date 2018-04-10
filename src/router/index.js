/**
 * index.js
 */

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home.vue'
import List from '../page/list/list.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})