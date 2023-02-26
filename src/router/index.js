import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/views/Layout.vue'
import Notify from '@/utils/notify.js'
import {getToken} from '@/utils/auth.js'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'layout',
            redirect: '/home',
            component: Layout,
            children: [
                {
                    path: 'home',
                    name: 'HOME',
                    component: () => import('@/views/page/HomePage.vue')
                },
                {
                    path: 'article',
                    name: 'ARTICLE',
                    component: () => import('@/views/page/ArticlePage.vue')
                },
            ]
        },
        {
            path: '/login',
            name: 'LOGIN',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NOT FOUND',
            component: () => import('@/views/404.vue')
        }
    ]
})

const whiteList = ['/login', '/403', '/404']
router.beforeEach((to, from, next) => {
    if (getToken()) {
        next()
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            Notify.notifyFailure('你还没有登录')
            next({name: 'LOGIN'});
        }
    }
})

export default router
