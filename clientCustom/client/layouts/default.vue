<template>
  <div >
    <Header/>
    <!-- <Vdo/> -->
    <main class="mt-5 pt-5">
    <!-- <main> -->
      <div> <!-- defalt use class="container" -->
        <nuxt/>
      </div>
    </main>    
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/nav/'
// import Vdo from '~/components/nav/carousel.vue'
import Footer from "~/components/footer/footer_default.vue"
export default {
  components: {
    Header,
    Footer,
    // Vdo
  }
};
</script>
<style scoped>
  .navbar {
  background-color: #1C2331 !important
  } 
</style>
