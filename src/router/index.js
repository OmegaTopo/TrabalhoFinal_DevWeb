import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/conversor", component: () => import("../views/ConversorPage.vue") },
  { path: "/countrySearch", component: () => import("../views/CountrySearch.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
