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
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://img.icons8.com/ios/50/000000/school.png'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css' },
      { rel: 'stylesheet', href: 'mdb_vdo_template/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'mdb_vdo_template/css/mdb.min.css' },
      { rel: 'stylesheet', href: 'mdb_vdo_template/css/style.min.css' }
    ],   
    script: [
      { src: 'https://js.stripe.com/v3' },
      { type:'text/javascript', src:'mdb_vdo_template/js/jquery-3.3.1.min.js' },
      { type:'text/javascript', src:'mdb_vdo_template/js/popper.min.js' },
      { type:'text/javascript', src:'mdb_vdo_template/js/bootstrap.min.js' },
      { type:'text/javascript', src:'mdb_vdo_template/js/mdb.min.js' },
    ]
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
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt',
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
