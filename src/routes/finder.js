import Vue from 'vue'
import Router from 'vue-router'
import finder from '../page/finder.vue'

Vue.use(Router)

export default [
    {
        path: '/finder/',
        component: finder
    },
    {
        path: '/finder/index',
        component: finder
    }
]
