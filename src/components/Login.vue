<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <div class="form-group">
      <label for="username">User name</label>
      <input
        type="text"
        name="username"
        class="form-control"
        placeholder="User name"
        v-model="formData.username"
      />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        class="form-control"
        placeholder="Password"
        v-model="formData.password"
      />
    </div>

    <button class="btn btn-primary btn-block">Login</button>
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

      localStorage.setItem('token', response.data.token)
      this.$store.dispatch('user', response.data.user)
      this.$router.push("/")
    },
  },
};
</script>
