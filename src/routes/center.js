import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/login.vue'
import regist from '../page/regist.vue'
import center from '../page/center.vue'

Vue.use(Router)

export default [
    {
        path: '/center/',
        component: center
    },{
        path: '/center/index',
        component: center
    },{
        path: '/center/login',
        component: login
    },{
        path: '/center/regist',
        component: regist
    }
  ]
