export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'page_in_vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'foundation-sites/dist/css/foundation.min.css',
    '~/assets/styles/globals.css',
    '~/assets/styles/transitions.css',
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/utils.js',
    { src: '~/plugins/foundation.client.js', mode: 'client' },
    { src: '~/plugins/motion-ui.client.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/toast'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  
  axios: {
    proxy: true
  },

//  proxy: {
//    '/api': 'http://localhost:8080'
//  },
  toast: {
    position: 'top-center', 
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
}
