import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "./api/axios";
import store from "./store/vuex";

const app = createApp(App);

app.use(router);

app.use(store);

app.mount("#app");
