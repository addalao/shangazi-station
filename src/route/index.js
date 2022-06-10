import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'index',
            path: '/',
            component: () => import('../pages/IndexView.vue')
        },
        {
            name: 'aboutUs',
            path: '/aboutUs',
            component: () => import('../pages/aboutUs.vue')
        },
        {
            name: 'News',
            path: '/News',
            component: () => import('../pages/news.vue')
        },
        {
            name: 'productCenter',
            path: '/productCenter',
            component: () => import('../pages/productCenter.vue')
        },
        {
            name: 'farmProgram',
            path: '/farmProgram',
            component: () => import('../pages/farmProgram.vue')
        },
        {
            name: 'ecology',
            path: '/ecology',
            component: () => import('../pages/ecology.vue')
        },
        {
            name: 'cloudPlatform',
            path: '/cloudPlatform',
            component: () => import('../pages/cloudPlatform.vue')
        },
        {
            name: 'downloadCenter',
            path: '/downloadCenter',
            component: () => import('../pages/downloadCenter.vue')
        },
        {
            name: 'cooperation',
            path: '/cooperation',
            component: () => import('../pages/cooperation.vue')
        },
    ]
})

export default router