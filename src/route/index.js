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

    ]
})

export default router