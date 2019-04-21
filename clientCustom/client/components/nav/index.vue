<template>
  <!-- Navbar -->  
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark dark scrolling-navbar">
    <div class="container">
      <!-- Brand -->
      <a class="navbar-brand" href="/">
       <i class="fab fa-accusoft mr-2"></i><strong>Computer science</strong>
      </a>

      <!-- Collapse -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link to="/" class="nav-link">หน้าหลัก<span class="sr-only">(current)</span></nuxt-link> 
            <!-- <a class="nav-link" href="/">
              หน้าหลัก
              <span class="sr-only">(current)</span>
            </a> -->
          </li>
          <li class="nav-item">
            <nuxt-link to="/course" class="nav-link ">หลักสูตร</nuxt-link>  
          </li>
          <li class="nav-item">
            <nuxt-link to="news" class="nav-link">ข่าวประกาศ</nuxt-link>             
          </li>
          <li class="nav-item">
             <nuxt-link to="/about" class="nav-link">ติดต่อ</nuxt-link>             
          </li>          
        </ul>

        <!-- Right -->
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
            <a href=" https://www.facebook.com/ComputerScienceBsru/" class="nav-link" target="_blank">
              <i class="fab fa-facebook-f"></i>              
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <!-- not auth -->
          <li class="nav-item" v-if="!username">         
              <nuxt-link to="/login" class="nav-link border border-light rounded" tag="a"><i class="fab fa-500px mr-2"/>Login</nuxt-link>          
          </li>

          <!--if auth student-->
          <li class="nav-item dropdown" v-if="((username) && (user.status == 'accessStudent'))" >
              <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <i class="fas fa-user"></i>account student</a>
              <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                  <!-- <a class="dropdown-item waves-effect waves-light" href="#">My account</a> -->
                  <nuxt-link to="/auth/student/profile" class="dropdown-item waves-effect waves-light" tag="a"><i class="fas fa-user-circle mr-2"></i>My account</nuxt-link> 
                  <nuxt-link to="/auth/student/document" class="dropdown-item waves-effect waves-light" tag="a"><i class="fas fa-file-signature mr-2"></i>Document</nuxt-link> 
                  <nuxt-link to="/auth/student/report" class="dropdown-item waves-effect waves-light" tag="a"><i class="fas fa-file-download mr-2"></i>Report & Download</nuxt-link>     

                  <!-- <a class="dropdown-item waves-effect waves-light" href="#">Log out</a> -->
                  <a href="/" class="dropdown-item waves-effect waves-light" @click="logout"><i class="fas fa-sign-out-alt mr-2"></i>Logout</a> 
              </div>
          </li>

           <!--if auth professor-->
          <li class="nav-item dropdown" v-else-if="((username) && (user.status == 'accessProfessor'))" >
              <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <i class="fas fa-user"></i>account professor</a>
              <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                  <!-- <a class="dropdown-item waves-effect waves-light" href="#">My account</a> -->
                  <nuxt-link to="/auth/professor/profile" class="dropdown-item waves-effect waves-light" tag="a"><i class="fas fa-user-circle mr-2"></i>My account</nuxt-link> 
                  <nuxt-link to="/auth/professor/document" class="dropdown-item waves-effect waves-light" tag="a"><i class="fas fa-file-signature mr-2"></i>Document</nuxt-link> 
                  <nuxt-link to="/auth/professor/report" class="dropdown-item waves-effect waves-light" tag="a"><i class="fas fa-file-download mr-2"></i>Report & Download</nuxt-link>     

                  <!-- <a class="dropdown-item waves-effect waves-light" href="#">Log out</a> -->
                  <a href="/" class="dropdown-item waves-effect waves-light" @click="logout"><i class="fas fa-sign-out-alt mr-2"></i>Logout</a> 
              </div>
          </li>

        </ul>
      </div>
    </div>
  </nav>  
  <!-- Navbar --> 
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      active: false
     
    }
  },
   computed: {
    username() {
      return this.$store.getters["auth/username"];
    },
     user() {
      return this.$store.state.auth.user
    }
  },
  methods: {
    ...mapMutations({
      logout: "auth/logout"
    }),
    mouseOver: function(){
            this.active = !this.active;   
        }
  }
};
</script>

<style>
</style>