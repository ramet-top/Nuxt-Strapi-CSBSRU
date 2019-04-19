<template>
  <div class="container">
    <!-- Default form register -->
    <form class="text-center border border-light p-5" autocomplete="on" @submit.stop.prevent="handleSubmit">
      <p class="h4 mb-4">Sign up</p>

      <div class="form-row mb-4">
        <div class="col">
          <!-- username -->
          <input
            class="form-control"
            id="username"
            v-model="username"
            type="username"
            autofocus="true"
            placeholder="Enter your username"
            required
          >
        </div>
      </div>

      <!-- E-mail -->
      <input
        class="form-control mb-4"
        id="email"
        v-model="email"
        type="email"
        autofocus="true"
        placeholder="Enter your email"
        required
      >

      <!-- Password -->
      <input
        id="password"
        v-model="password"
        label="password"
        type="password"
        class="form-control"
        autofocus="true"
        placeholder="Enter your password"
        required
      >
      <!-- <small
        id="defaultRegisterFormPasswordHelpBlock"
        class="form-text text-muted mb-4"
      >At least 8 characters and 1 digit</small> -->

      <!-- Newsletter -->
      <!-- <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter">
        <label
          class="custom-control-label"
          for="defaultRegisterFormNewsletter"
        >Subscribe to our newsletter</label>
      </div> -->

      <!-- Sign up button -->
      <button class="btn btn-info my-4 btn-block" :disabled="loading" type="submit">Register</button>
      <p class="text-center mt-3">
          Already have an account?
          <router-link :to="{ name: 'login'}" tag="a">Login</router-link>
        </p>

      <!-- Social register -->
      <hr>

      <!-- Terms of service -->
      <p>
        By clicking
        <em>Sign up</em> you agree to our
        <a href target="_blank">terms of service</a>
      </p>
    </form>
    <!-- Default form register -->
  </div>
</template>

<script>
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);
import { mapMutations } from "vuex";
export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const response = await strapi.register(
          this.username,
          this.email,
          this.password
        );
        this.loading = false;
        this.setUser(response.user);
        this.$router.push("/");
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },
    ...mapMutations({
      setUser: "auth/setUser"
    })
  }
};
</script>

<style lang="scss" scoped>
</style>