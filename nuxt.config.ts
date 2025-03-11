// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    // Options
  },
  modules: ['@nuxt/image'],

  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret:  process.env.API_SECRET,
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.API_BASE,
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  nitro: {
    prerender: {
      routes: [
        '/blog/UX-UI-et-Accessibilite-Pourquoi-un-Bon-Design-Fait-Toute-la-Difference',
        '/developpement-web-vue-react-symfony-adonis',
        '/developpement-mobile-react-native-flutter-swift-kotlin',
        '/developpement-wordpress-sur-mesure',
        '/design-ux-ui-figma',
        '/mes-collaborations-projets',
        '/blog',
        '/',
      ]
    }
  }
})

