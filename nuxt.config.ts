// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    // Options
  },
  modules: ['@nuxt/image', '@nuxtjs/html-validator', '@nuxt/eslint'],

  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret:  process.env.API_SECRET,
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000',
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
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
        '/developpement-mobile-react-native-swift',
        '/developpement-wordpress-sur-mesure',
        '/design-ux-ui-figma',
        '/mes-collaborations-projets',
        '/blog',
        '/',
      ]
    }
  },
  htmlValidator: {
    usePrettier: false,
    logLevel: 'verbose',
    failOnError: false,
    /** A list of routes to ignore (that is, not check validity for). */
    ignore: [/\.(xml|rss|json)$/],
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard'
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off'
      }
    }
  }
})