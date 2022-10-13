import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-LZCHVJW40S",
      params: {
        debug_mode: true
      }
    },
    useDebugger: true,
  });
});
