<!--TODO Need to fix after have login api -->

<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <router-link to="/home" class="nav-link"
      ><img src="https://i.ibb.co/7SmtMZD/Frame-427319592.png" alt="logo"
    /></router-link>
    <div class="collapse navbar-collapse">
      <form class="d-flex">
        <button class="btn">
          <img src="../../styles/img/sidebar/Search.png" alt="search" />
        </button>
        <input
          class="form-control mr-2"
          type="search"
          placeholder="Tìm kiếm bài viết"
          aria-label="Tìm kiếm bài viết"
        />
      </form>
      <primary-button />
      <ul class="navbar-nav ml-auto">
        <div>Admin</div>
        <router-link to="/home" class="nav-link"
          ><img
            src="https://i.ibb.co/319gct2/circle-user.png"
            alt="circle-user"
        /></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import PrimaryButton from "./button/PrimaryButton.vue";

export default {
  name: "NavbarItem",
  components: {
    PrimaryButton,
  },
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

<style>
.navbar {
  z-index: 0 !important;
}

.navbar .navbar-collapse form {
  min-width: 50%;
}

.navbar .navbar-collapse form input {
  background-color: var(--background);
  border: none;
  border-radius: 0;
  padding-left: 0;
}

.navbar .navbar-collapse form input:focus {
  outline-style: none !important;
}

.navbar .navbar-collapse form button,
.navbar .navbar-collapse form button:hover,
.navbar .navbar-collapse form button:focus {
  border: none !important;
  background-color: var(--background) !important;
  border-radius: 0;
  color: var(--background) !important;
  border-color: var(--background) !important;
  outline: none !important;
}

.navbar .navbar-collapse .navbar-nav div {
  margin-bottom: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
