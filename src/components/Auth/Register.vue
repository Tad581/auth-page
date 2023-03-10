<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <div class="form-group">
      <label for="username">User name</label>
      <input
        type="text"
        name="username"
        class="form-control"
        placeholder="User name"
      />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        class="form-control"
        placeholder="Password"
      />
    </div>

    <div class="form-group">
      <label for="password">Confirm password</label>
      <input
        type="password"
        name="confirm-password"
        class="form-control"
        placeholder="Confirm password"
      />
    </div>

    <button class="btn btn-primary btn-block">Sign up</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterItem",
  data() {
    return {
      formData: {
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("register", this.formData);
      console.log("response :>> ", response);

      this.$router.push("/login");
    },
  },
};
</script>
