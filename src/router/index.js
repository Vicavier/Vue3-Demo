import {createRouter, createWebHashHistory } from "vue-router";

const routes = [
    //register and login
    {
        path: '/',
        component: () => import('../views/HomePage.vue'),
    },
]

const router = createRouter({
    history:createWebHashHistory (),
    routes
})

export default router