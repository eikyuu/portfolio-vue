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
  modules: [
    '@nuxt/image',
    '@nuxtjs/html-validator',
    '@nuxt/eslint',
    '@vueuse/motion/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
    'nuxt-og-image',
    'nuxt-seo-utils',
  ],

  site: {
    url: 'https://vincentduguet.dev',
    name: 'Vincent Duguet',
    description:
      'Développeur web freelance à Tours, spécialisé Angular, React, Vue, Nuxt et Java Spring Boot. Création de sites et d’applications mobile React Native sur mesure.',
    defaultLocale: 'fr',
  },

  sitemap: {
    exclude: ['/daily-ui-challenges/**'],
  },

  robots: {
    disallow: ['/daily-ui-challenges'],
  },

  ogImage: {
    defaults: {
      cacheMaxAgeSeconds: 60 * 60 * 24 * 30,
    },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3000',
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_PUBLISHABLE_KEY,
      motion: {
        directives: {
          'pop-bottom': {
            initial: { scale: 0, opacity: 0, y: 100 },
            visible: { scale: 1, opacity: 1, y: 0 },
          },
        },
      },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'theme-color', content: '#5A3B5D' },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: [
        '/blog/UX-UI-et-Accessibilite-Pourquoi-un-Bon-Design-Fait-Toute-la-Difference',
        '/blog/IA-et-Creation-de-Contenu-Revolution-ou-Illusion',
        '/blog/Pourquoi-WordPress-Domine-la-Creation-de-Sites-Web-en-2025',
        '/blog/Core-Web-Vitals-et-SEO-Technique-Optimiser-Votre-Site-en-2026',
        '/blog/React-Native-vs-Flutter-Quel-Framework-Mobile-Choisir-en-2026',
        '/blog/Developpeur-Web-Freelance-vs-Agence-Que-Choisir-pour-Votre-Projet-Digital',
        '/developpement-web-vue-react-symfony-adonis',
        '/developpement-mobile-react-native',
        '/developpement-wordpress-sur-mesure',
        '/design-ux-ui-figma',
        '/mes-collaborations-projets',
        '/contact',
        '/blog',
        '/',
      ],
    },
  },

  htmlValidator: {
    usePrettier: false,
    logLevel: 'verbose',
    failOnError: false,
    ignore: [/\.(xml|rss|json)$/],
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard',
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        'no-inline-style': 'off',
      },
    },
  },
})
