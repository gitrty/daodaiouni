import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('../views/Shopping.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/Details.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/regs',
      name: 'regs',
      component: () => import('../views/Regs.vue')
    },
    // 路径输入错误 跳转 首页
    {
      path: '*',
      name: 'page404',
      component: Home
    }
  ]
})

