<template>
  <div id="app">
    <!-- <navbar-login /> -->
    <sidebar-menu-item />
    <div class="auth-wrapper">
      <div class="auth-inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import "./styles/css/index.css";
import axios from "axios";
// import NavbarLogin from "./components/layouts/NavbarLogin.vue";
import SidebarMenuItem from "./components/layouts/SidebarMenu.vue";
export default {
  name: "App",
  components: {
    // NavbarLogin,
    SidebarMenuItem,
  },
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const response = await axios.get("user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    this.$store.dispatch("user", response.data);
  },
};
</script>
