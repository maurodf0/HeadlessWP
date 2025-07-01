// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    'lenis/nuxt',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@dargmuesli/nuxt-cookie-control'
  ],
  compatibilityDate: '2025-01-06',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Mauro De Falco | Frontend Developer',
      htmlAttrs: {
        lang: 'it',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
        pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/wordpress',
    ],
  },
  css: ['@/assets/css/main.css'],
   nitro: {
    compressPublicAssets: true,
  }
})