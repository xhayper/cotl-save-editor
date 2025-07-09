// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  css: ["@/assets/styles/global.scss"]
});