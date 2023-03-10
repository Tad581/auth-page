<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <router-link to="/home" class="nav-link"
      ><img src="../../styles/img/logo.png" alt="logo"
    /></router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto" v-if="!user">
        <router-link to="/home" class="nav-link"
          ><img
            src="https://i.ibb.co/319gct2/circle-user.png"
            alt="circle-user"
        /></router-link>
      </ul>
      <ul class="navbar-nav ml-auto" v-if="user">
        <li class="nav-item">
          <a href="javascript:void(0)" @click="handleLogout" class="nav-link"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavbarItem",
  methods: {
    handleLogout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.router.push("/");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
