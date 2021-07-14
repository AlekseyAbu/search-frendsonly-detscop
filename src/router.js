import  Vue from 'vue'
import Router from 'vue-router'
import MostFriends from '@/pages/MostFriends.vue'
import MostFriendsDay from '@/pages/MostFriendsDay.vue'
import MostFriendsWeek from '@/pages/MostFriendsWeek.vue'
import MostProfitable from '@/pages/MostProfitable.vue'
import PopularPaid from '@/pages/PopularPaid.vue'

Vue.use(Router)

export default new Router({


    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./pages/Home.vue')
        },
        {
            path: '/most-friends',
            component: MostFriends
        },
        {
            path: '/most-profitable',
            component: MostProfitable
        },
        {
            path: '/popular-paid',
            component: PopularPaid

        },
        {
            path: '/most-friends-day',
            component: MostFriendsDay
        },
        {
            path: '/most-friends-week',
            component: MostFriendsWeek
        }
    ]
})