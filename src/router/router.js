import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
    },
    {
        path: '/plus',
        component: import('../components/Plus.vue')
    },
    {
        path: '/minus',
        component: import('../components/Minus.vue')
    },
    {
        path: '/stats',
        component: import('../components/Stats.vue')
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})