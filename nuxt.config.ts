// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  app: {
    head: {
      title: 'Hermippus | Personal website',
      link: [
        { rel: 'icon', href: '/favicon.ico'}
      ]
    },
  },
})
