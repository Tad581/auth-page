import { createRouter, createWebHistory } from "vue-router";

import LoginItem from "../components/Auth/Login.vue";
import RegisterItem from "../components/Auth/Register.vue";
import HomeItem from "../components/Home/index.vue";
import ContentItem from "../components/Content/index.vue";
import EventItem from "../components/Event/index.vue";
import CalendarItem from "../components/Calendar/index.vue";
import TetEventItem from "../components/TetEvent/index.vue";
import UserItem from "../components/User/index.vue";
import SettingItem from "../components/Setting/index.vue";

const routes = [
  { path: "/", component: HomeItem },
  { path: "/login", component: LoginItem },
  { path: "/sign-up", component: RegisterItem },
  { path: "/bai-viet", component: ContentItem },
  { path: "/su-kien", component: EventItem },
  { path: "/lich-ngay", component: CalendarItem },
  { path: "/su-kien-tet", component: TetEventItem },
  { path: "/thanh-vien", component: UserItem },
  { path: "/cai-dat", component: SettingItem },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
