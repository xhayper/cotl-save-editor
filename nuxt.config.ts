const GTAG_ID = "G-LZCHVJW40S";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "server",
  ssr: true,
  modules: [
    "@nuxtjs/web-vitals",
    "@vueuse/nuxt",
    "nuxt-windicss",
  ],
  runtimeConfig: {
    public: {
      GTAG_ID,
    },
  },
  googleAnalytics: {
    id: GTAG_ID,
  },
  partytown: {
    forward: ["dataLayer.push"],
  },
  css: ["@/assets/css/global.scss"],
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
    strict: true,
    typeCheck: true,
  },
});
