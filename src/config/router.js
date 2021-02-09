import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// web (public) components
import Login from '@/components/web/Login'
import Register from '@/components/web/Register'
import WebHome from '@/components/web/Home'

// app (private) components
import AppHome from '@/components/app/Home'

// Routes
export default new Router(
    {
        mode: 'history',
        routes: [

            /* web ------------------------------ */

            {
                path: '/',
                component: WebHome,
                name: 'web.home'
            },
            {
                path: '/login',
                component: Login,
                name: 'web.login'
            },
            {
                path: '/cadastro',
                component: Register,
                name: 'web.register'
            },

            /* app ------------------------------ */

            {
                path: '/app',
                component: AppHome,
                name: 'app.home',

                beforeEnter: (to, from, next) => {

                    if (!sessionStorage.getItem('t_a_hrefs'))
                    {
                        next({ name: 'web.login' })
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