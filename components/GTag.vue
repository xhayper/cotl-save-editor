<script setup>
const runtimeConfig = useRuntimeConfig();

useHead({
  script: [
    {
      type: "text/partytown",
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${runtimeConfig.public.GTAG_ID}`,
    },
    {
      type: "text/partytown",
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${runtimeConfig.public.GTAG_ID}');
      `,
    },
  ],
});
</script>

<template>
  <div />
</template>
