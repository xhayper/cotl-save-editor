// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@vueuse/nuxt", "nuxt-windicss", "json-editor-vue/nuxt"],
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
