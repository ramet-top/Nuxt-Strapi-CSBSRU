import pkg from './package'

export default {
  mode: 'universal',
  // mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{ src: 'https://js.stripe.com/v3' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // *************************************************@nuxtjs/bootstrap-vue
    // Doc: https://bootstrap-vue.js.org/docs/

     // Simple usage
    //  '@nuxtjs/bootstrap-vue',
    
     // With options
    //  ['@nuxtjs/bootstrap-vue', { css: false }],

    // **************************************************nuxt-buefy
      // Simple usage
      'nuxt-buefy',

      // Or you can customize
      // ['nuxt-buefy', { css: false, materialDesignIcons: false }],
  
    
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
