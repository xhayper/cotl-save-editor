<script setup>
const runtimeConfig = useRuntimeConfig();

onMounted(() => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", runtimeConfig.public.GTAG_ID);
});
</script>

<template>
  <client-only>
    <!-- Google tag (gtag.js) -->
    <Head>
      <Script
        type="text/partytown"
        :src="`https://www.googletagmanager.com/gtag/js?id=${runtimeConfig.public.GTAG_ID}`"
      />
    </Head>
  </client-only>
</template>
