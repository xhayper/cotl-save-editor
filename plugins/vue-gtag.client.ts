import VueGtag, { trackRouter } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const router = useRouter();

  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: runtimeConfig.public.googleAnalytics.id,
      params: {
        debug_mode: process.env.NODE_ENV !== "production",
      },
    },
  });

  trackRouter(router);
});
