import { createRouter, createWebHistory } from "vue-router";

import HomeItem from "../components/Home.vue";
import LoginItem from "../components/Login.vue";
import RegisterItem from "../components/Register.vue"

const routes = [
  { path: "/", component: HomeItem },
  { path: "/login", component: LoginItem },
  { path: "/sign_up", component: RegisterItem },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
