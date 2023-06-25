import {createRouter, createWebHistory} from "vue-router";

const routes = [
    //register and login
    {
        path: '/',
        component: () => import('../views/HomePage.vue'),
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router