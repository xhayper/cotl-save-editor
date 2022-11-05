// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@vueuse/nuxt", "nuxt-windicss"],
  runtimeConfig: {
    public: {
      googleAnalytics: {
        id: "G-LZCHVJW40S",
      },
    },
  },
  css: ["@/assets/styles/global.scss"],
  windicss: {
    analyze: true,
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
});
