import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// web (public) components
import Login from '@/components/web/Login'
import Home from '@/components/web/Home'

// app (auth) components
import AppHome from '@/components/app/Home'

// Routes
export default new Router(
    {
        mode: 'history',
        routes: [

            /* web ------------------------------ */

            {
                path: '/',
                component: Home,
                name: 'web.home'
            },
            {
                path: '/login',
                component: Login,
                name: 'web.login'
            },

            /* app ------------------------------ */

            {
                path: '/app',
                component: AppHome,
                name: 'app.home',

                beforeEnter: (to, from, next) => {

                    if (!sessionStorage.getItem('t_a_hrefs'))
                    {
                        next('/login')
                    }
                    else
                    {
                        next()
                    }
                }
            }
        ]
    }
)