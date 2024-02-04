import {resolve} from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    baseUrl: 'https://chat-server-bms6x0rdl-ilyamalyukovs-projects.vercel.app'
  },
  head: {
    title: 'client',
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

  alias: {
    '@c': resolve(__dirname, './components'),
    styles: resolve(__dirname, './styles'),
    '~styles': resolve(__dirname, './styles'),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-socket-io'
  ],
  io: {
    sockets: [
      {
        name: 'work',
        url: 'https://chat-server-bms6x0rdl-ilyamalyukovs-projects.vercel.app'
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  buildDir: 'dist',
  target: 'static',
}
