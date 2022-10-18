import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";

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
  css: ["@/assets/css/global.scss"],
  sourcemap: {
    client: true,
    server: true,
  },
  nitro: {
    experimental: {
      wasm: true,
    },
  },
  vite: {
    plugins: [topLevelAwait(), wasm()],
    build: {
      sourcemap: true,
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
