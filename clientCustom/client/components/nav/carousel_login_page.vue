<template>
  <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
    <!--Slides-->
    <div class="carousel-inner vh-100" role="listbox">
      <!--First slide-->
      <div class="carousel-item active">
        <div class="view">
          <!-- Video source-->
          <video class="video-intro" autoplay loop muted>
            <!-- <source src="https://mdbootstrap.com/img/video/city.mp4" type="video/mp4"> -->
            <!-- <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4"> -->
            <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4">
          </video>

          <!-- Mask & flexbox options-->
          <div class="mask rgba-black-light d-flex justify-content-center align-items-center pt-2">
            <!-- Content -->            
            <div class="container ">                 
              <hr class="hr-light">              
              <!--Grid row-->
              <div class="row wow fadeIn">
                <!--Grid column-->
                <div class="col-md-4">                 
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-4">
                  <!--Card-->
                  <div class="card">
                    <!--Card content-->
                    <div class="card-body">
                      <!-- Form -->
                      <form autocomplete="on" @submit.stop.prevent="handleSubmit">
                        <!-- Heading -->
                        <h3 class="dark-grey-text text-center">
                          <strong>Login Now</strong>
                        </h3>
                        <hr>
                        <div class="md-form">
                          <i class="fas fa-user prefix grey-text"></i>
                          <!-- <input type="text" id="form3" class="form-control"> -->
                          
                          <!-- use username or email login -->
                          <input 
                            id="identifier" 
                            v-model="identifier"
                            type="text"
                            autofocus="true"
                            placeholder="Enter your identifier"
                            required
                          >
                          <!-- <label for="form3">Your name</label> -->
                        </div>
                        <div class="md-form">
                          <i class="fas fa-key prefix grey-text"></i>
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
                          <!-- <label for="form2">Your email</label> -->
                        </div>

                        <div class="text-center">
                           <!-- <fieldset class="form-check">
                            <input type="checkbox" class="form-check-input" id="checkbox1">
                            <label
                              for="checkbox1"
                              class="form-check-label dark-grey-text"
                            >Remember Me</label>
                          </fieldset> -->
                          <button class="btn btn-outline-info btn-lg btn-block waves-effect mt-2" :disabled="loading" type="submit" > <strong>Login</strong></button>
                          <p class="text-center mt-3">
                              No account yet
                              <router-link :to="{ name: 'register'}" tag="a">Register</router-link>
                          </p>
                          <hr>                         
                        </div>
                      </form>
                      <!-- Form -->
                    </div>
                  </div>
                  <!--/.Card-->
                </div>
                <!--Grid column-->

                  <!--Grid column-->
                <div class="col-md-4">                 
                </div>
                <!--Grid column-->
              </div>
              <!--Grid row-->
              <hr class="hr-light">
            </div>
            <!-- Content -->
          </div>
          <!-- Mask & flexbox options-->

        </div>
      </div>
      <!--/First slide-->
    </div>
    <!--/.Slides-->

   
  </div>
</template>

<script>
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);
import { mapMutations } from "vuex";
export default {  
  data() {
    return {
      identifier:"", //use username or email login
      password: "",
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const response = await strapi.login(this.identifier, this.password);
        this.loading = false;
        this.setUser(response.user);
        this.$router.replace("/");
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

<style>
</style>