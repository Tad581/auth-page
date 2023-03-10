<template>
  <div id="app">
    <navbar-item />
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
import NavbarItem from "./components/layouts/Navbar.vue";
// import SidebarMenuItem from "./components/layouts/SidebarMenu.vue";
export default {
  name: "App",
  components: {
    NavbarItem,
    // SidebarMenuItem,
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
