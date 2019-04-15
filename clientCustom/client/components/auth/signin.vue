<template>
  <section class="container">
    <!-- <div class="col-md-6 offset-md-3 mt-3">
      <form autocomplete="on" @submit.stop.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            autofocus="true"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <b-form-input
            id="password"
            v-model="password"
            label="password"
            type="password"
            class="form-control"
            autofocus="true"
            placeholder="Enter your password"
            required
          />
        </div>
        <button :disabled="loading" type="submit" class="btn btn-primary btn-block mt-3">Submit</button>
        <p class="text-center mt-3">
          No account yet
          <router-link :to="{ name: 'signup'}" tag="a">Register</router-link>
        </p>
      </form>
    </div>-->

    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <!-- <p class="bd-notification is-primary">
          <code class="html">is-half</code>
          <br>
        </p>-->
        <form autocomplete="on" @submit.stop.prevent="handleSubmit">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                placeholder="Email"
                autofocus="true"
                v-model="email"
                id="email"
                required
              >
              <span class="icon is-small is-left">
                <b-icon icon="account"></b-icon>
              </span>
              <span class="icon is-small is-right">
                <!-- <i class="fas fa-check"></i> -->
                <b-icon icon="check"></b-icon>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                placeholder="Password"
                autofocus="true"
                id="password"
                v-model="password"
                required
              >
              <span class="icon is-small is-left">
                <!-- <i class="fas fa-lock"></i> -->
                <b-icon icon="lock"></b-icon>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success button is-fullwidth is-medium" :disabled="loading">Login</button>
            </p>
          </div>
        </form>
      </div>
    </div>

    <!-- <div class="columns is-1 is-centered">
      <div class="column">No gap</div>
      <div class="column is-centered">
      
      </div>
      <div class="column">No gap</div>
    </div>-->
  </section>
</template>

<script>
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);
import { mapMutations } from "vuex";
export default {
  name: "sigin",
  data() {
    return {
      email: "",
      password: "",
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const response = await strapi.login(this.email, this.password);
        this.loading = false;
        this.setUser(response.user);
        this.$router.replace("auth/profile");
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