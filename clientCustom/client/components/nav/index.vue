<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link tag="a" class="navbar-brand" to="/" exact>Deliveroo clone</router-link>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li v-if="username">
            <a href="/auth/profile" class="nav-link">Hello {{ username }}</a>
          </li>
          <li v-if="username">
            <a href="/home" class="nav-link" @click="logout">Logout</a>
          </li>
          <li v-if="!username">
            <router-link v-if="!username" tag="a" class="nav-link" to="/signin" exact>Signin</router-link>
          </li>
          <li v-if="!username">
            <router-link v-if="!username" tag="a" class="nav-link" to="/signup" exact>Signup</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>-->

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="showNav = !showNav"
          :class="{'is-active': showNav}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active':showNav}">
        <div class="navbar-start">
          <!-- <a class="navbar-item">Home</a> -->
          <nuxt-link tag="a" class="navbar-item" to="/">Home</nuxt-link>

          <a class="navbar-item">Documentation</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider">
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons" v-if="!username">
              <nuxt-link v-if="!username" tag="a" class="button is-light" to="/signin" exact>
                <strong>Login</strong>
              </nuxt-link>            
              <nuxt-link
                v-if="!username"
                tag="a"
                class="button is-primary"
                to="/signup"
                exact
              >Register</nuxt-link>
            </div>
            <div class="buttons" v-if="username">
              <a href="/auth/profile" class="button is-light">Hello {{ username }}</a>
              <a href="/" class="button is-light" @click="logout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      showNav: false
      //   user: true
    };
  },
  computed: {
    username() {
      return this.$store.getters["auth/username"];
    }
  },
  methods: {
    ...mapMutations({
      logout: "auth/logout"
    })
  }
};
</script>
<style scoped>
</style>