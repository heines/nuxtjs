require('dotenv').config();

export default {
  mode: 'universal',
  /*
   ** Environments
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  router: {
    base: process.env.SUBDIR,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'TOP',
    titleTemplate: `%s - ${process.env.TITLE}`,
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.DEFAULT_DESCRIPTION || '',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: process.env.TITLE || '',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.BASE_URL,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: process.env.TITLE || '',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.DEFAULT_DESCRIPTION || '',
      },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   content: `${baseOgp}/common.jpg`
      // },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '@/assets/css/main.scss',
      lang: 'scss',
    },
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    // 指定したSCSSファイルをvueファイル内のstyleタグの中で有効とする
    scss: ['@/assets/css/foundation/_variables.scss'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
