// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "server",
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
  sourcemap: {
    client: true,
    server: true,
  },
  vite: {
    build: {
      sourcemap: true,
    },
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
});
