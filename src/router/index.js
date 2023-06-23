import { createRouter, createWebHistory } from "vue-router";

// Rotas para navegar no site

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        { path: "/register", component: () => import ("../views/Register.vue") },
        { path: "/login", component: () => import ("../views/Login.vue") },
        { path: "/dashboard", component: () => import ("../views/Dashboard.vue") },
    ],
});

export default router;