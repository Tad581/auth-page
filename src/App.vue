<template>
  <div id="app">
    <Navbar />
    <div class="auth-wrapper">
      <div class="auth-inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import "./styles/css/index.css"
import axios from "axios";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
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
