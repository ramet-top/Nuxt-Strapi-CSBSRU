<template>
  <div >
    <Header/>
    <Vdo/>
    <main>
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