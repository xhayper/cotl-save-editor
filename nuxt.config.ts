// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@vueuse/nuxt", "nuxt-windicss"],
  css: ["@/assets/styles/global.scss"],
  windicss: {
    analyze: true,
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        types: ["nuxt-windicss"],
      },
    },
  },
});
