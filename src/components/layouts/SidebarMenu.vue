<template>
  <!-- <aside :class="`${is_expanded ? 'is-expanded' : ''}`"> -->
  <aside class="is-expanded">
    <div class="logo">
      <img :src="logoURL" alt="Vue" />
    </div>

    <!-- <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div> -->

    <div class="menu">
      <router-link to="/" class="button">
        <img
          src="../../styles/img/sidebar/home.png"
          class="material-icons"
          alt="home"
        />
        <span class="text">Trang chủ</span>
      </router-link>
      <router-link to="/bai-viet" class="button">
        <img
          src="../../styles/img/sidebar/Document.png"
          class="material-icons"
          alt="document"
        />
        <span class="text">Bài viết</span>
      </router-link>
      <router-link to="/su-kien" class="button">
        <img
          src="../../styles/img/sidebar/Bookmark.png"
          class="material-icons"
          alt="bookmark"
        />
        <span class="text">Sự kiện</span>
        <div class="arrow"></div>
      </router-link>
      <router-link to="/lich-ngay" class="button">
        <img
          src="../../styles/img/sidebar/date.png"
          class="material-icons"
          alt="date"
        />
        <span class="text">Lịch ngày</span>
      </router-link>
      <router-link to="/su-kien-tet" class="button">
        <img
          src="../../styles/img/sidebar/pagodas.png"
          class="material-icons"
          alt="pagoda"
        />
        <span class="text">Sự kiện Tết</span>
      </router-link>
      <router-link to="/thanh-vien" class="button">
        <img
          src="../../styles/img/sidebar/User.png"
          class="material-icons"
          alt="user"
        />
        <span class="text">Thành viên</span>
      </router-link>
      <router-link to="/cai-dat" class="button">
        <img
          src="../../styles/img/sidebar/Setting.png"
          class="material-icons"
          alt="setting"
        />
        <span class="text">Cài đặt</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
// import { ref } from "vue";
import logoURL from "../../styles/img/logo.png";
// const is_expanded = ref(localStorage.getItem("is_expanded") === "false");
// const ToggleMenu = () => {
//   is_expanded.value = !is_expanded.value;
//   localStorage.setItem("is_expanded", is_expanded.value);
// };
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--sidebar-bg);
  color: var(--sidebar-text);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;
  z-index: 2;
}
aside .flex {
  flex: 1 1 0%;
}
aside .logo {
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
}
aside .menu-toggle-wrap {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
  top: 0;
  transition: 0.2s ease-in-out;
}
aside .menu-toggle-wrap .menu-toggle {
  transition: 0.2s ease-in-out;
}
aside .menu-toggle-wrap .menu-toggle .material-icons {
  font-size: 2rem;
  color: var(--white);
  transition: 0.2s ease-out;
}

aside .menu-toggle-wrap .menu-toggle .material-icons:hover {
  color: var(--primary);
  transform: translateX(0.5rem);
}
aside h3,
aside .button .text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
aside h3 {
  color: var(--grey);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
aside .menu {
  margin: 0 -1rem;
}
aside .menu .button {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 0.8rem 1.25rem;
  position: relative;
}

aside .menu .button:hover {
  background-color: var(--primary);
}

aside .menu .button .arrow {
  height: 0;
  width: 0;

  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-right: 10px solid var(--white);

  position: absolute;
  right: 0;
}

aside .menu .button .material-icons {
  font-size: 2rem;
  color: var(--white);
  transition: 0.2s ease-in-out;
}
aside .menu .button .text {
  color: var(--white);
  transition: 0.2s ease-in-out;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
}

.is-expanded {
  width: var(--sidebar-width);
}

.is-expanded .menu-toggle-wrap {
  top: -3rem;
}

.is-expanded .menu-toggle-wrap .menu-toggle {
  transform: rotate(-180deg);
}

.is-expanded h3,
.is-expanded .button .text {
  opacity: 1;
}

.is-expanded .menu .material-icons {
  margin-right: 10px;
}
</style>
