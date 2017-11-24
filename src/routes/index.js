import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index.vue'

Vue.use(Router)

export default [
    {
        path: '/',
        component: index
    },{
        path: '/index',
        component: index
    }
  ]
