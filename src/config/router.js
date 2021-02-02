import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '@/components/web/Login'
import Home from '@/components/web/Home'

export default new Router(
    {
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Home,
                name: 'web.home'
            },
            {
                path: '/login',
                component: Login,
                name: 'web.login'
            }
        ]
    }
)