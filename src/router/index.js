import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/views/Layout.vue'

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

export default router
