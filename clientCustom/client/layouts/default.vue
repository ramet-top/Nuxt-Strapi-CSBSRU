<template>
  <div >
    <Header/>
    <!-- <Vdo/> -->
    <main class="mt-5 pt-5">
      <div> <!-- defalt use class="container" -->
        <nuxt/>
      </div>
    </main>    
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/nav/test.vue'
import Vdo from '~/components/nav/carousel.vue'
import Footer from "~/components/footer"
export default {
  components: {
    Header,
    Footer,
    Vdo
  }
};
</script>