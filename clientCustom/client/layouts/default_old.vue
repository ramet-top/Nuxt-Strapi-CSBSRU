<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/nav/'
import Footer from '~/components/footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>