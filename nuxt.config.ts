// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  meta: {
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

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/_colors.sass" as *\n'
        },
      }
    }
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
    '~/plugins/vue-3toastify.ts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //'@nuxtjs/toast'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    }
  },

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

  server: {
    host: '0.0.0.0'
  }
})
