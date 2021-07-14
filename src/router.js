import  Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: () => import('@/pages/interesting.vue') 
        },
        {
            path: '/most-friends',
            component: () => import('./pages/Compilation1.vue')
        },
        {
            path: '/most-profitable',
            component: () => import('./pages/Compilation2.vue')
        },
        {
            path: '/popular-paid',
            component: () => import('./pages/Compilation3.vue')
        },
        {
            path: '/most-friends-day',
            component: () => import('./pages/Compilation4.vue')
        },
        {
            path: '/most-friends-week',
            component: () => import('./pages/Compilation5.vue')
        }
    ]
})