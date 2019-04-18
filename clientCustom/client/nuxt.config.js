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
      // Font Awesome 
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css' },

      // default template unknown version
      // { rel: 'stylesheet', href: 'mdb_vdo_template/css/bootstrap.min.css'},
      // { rel: 'stylesheet', href: 'mdb_vdo_template/css/mdb.min.css'},
      { rel: 'stylesheet', href: 'mdb_vdo_template/css/style.min.css'},     
      
      // // Bootstrap core CSS
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css' },

      // // Material Design Bootstrap
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.6/css/mdb.min.css' },

      // CSS default template
     
    ],   
    script: [
      { src: 'https://js.stripe.com/v3' }, //checkout file use shope
      // default template unknown version
      { type:'text/javascript', src:'mdb_vdo_template/js/jquery-3.3.1.min.js' },
      { type:'text/javascript', src:'mdb_vdo_template/js/popper.min.js' },
      { type:'text/javascript', src:'mdb_vdo_template/js/bootstrap.min.js' },
      { type:'text/javascript', src:'mdb_vdo_template/js/mdb.min.js' },

      // // JQuery 
      // { type:'text/javascript', src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },

      // // Bootstrap tooltips
      // { type:'text/javascript', src:'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js' },

      // // Bootstrap core JavaScript
      // { type:'text/javascript', src:'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js' },

      // // MDB core JavaScript
      // { type:'text/javascript', src:'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.7/js/mdb.min.js' },

      //  custom script by top 
      // { type:'text/javascript',  new: 'WOW().init()' },

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
