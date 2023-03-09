<template>
  <form @submit.prevent="handleSubmit">
    <h3>Đăng nhập</h3>
    <div class="form-group">
      <label for="username">Tên đăng nhập</label>
      <input
        type="text"
        name="username"
        class="form-control"
        placeholder="Nhập ..."
        v-model="formData.username"
      />
    </div>

    <div class="form-group">
      <label for="password">Mật khẩu</label>
      <input
        type="password"
        name="password"
        class="form-control"
        placeholder="Nhập ..."
        v-model="formData.password"
      />
    </div>

    <div class="form-group">
      <button class="btn btn-block">Đăng nhập</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginItem",
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("login", this.formData);
      console.log("response :>> ", response);

      localStorage.setItem("token", response.data.token);
      this.$store.dispatch("user", response.data.user);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
form {
  width: 60%;
}

form h3 {
  color: #1d4c90;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 50px;
}

form button {
  background-color: #0168a5;
  color: #fff;
  padding: 10px 0;
}

form button:hover {
  color: #fff;
}
</style>
