// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "nuxt-windicss"],
  css: ["@/assets/styles/global.scss"],
  windicss: {
    analyze: true,
  }
});
