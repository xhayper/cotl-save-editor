// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    css: ["@/assets/css/global.scss"],
    sourcemap: {
        client: true,
        server: true
    },
    vite: {
        build: {
            sourcemap: true
        }
    },
    typescript: {
        strict: true,
        typeCheck: true,
        shim: false
    }
})
