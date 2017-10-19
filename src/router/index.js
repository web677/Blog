import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index.vue'
import login from '../page/login.vue'
import regist from '../page/regist.vue'

Vue.use(Router)

export default [
    {
        path: '/index',
        component: index
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/regist',
        component: regist
    }
  ]
