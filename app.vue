<style lang="scss" src="~/assets/styles/global.scss" />

<template>
  <ThemeLoader />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "Cult of the Lamb - Save file editor",
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "256x256",
    },
  ],
  meta: [
    {
      name: "theme-color",
      content: "#CD2524",
    },
    {
      name: "description",
      property: "og:description",
      content: "a save file editor for a game called Cult of the Lamb",
    },

    /* Open-Graph */
    {
      name: "og:title",
      content: "Cult of the Lamb - Save file editor",
    },
    {
      name: "og:descrption",
      content: "a save file editor for a game called Cult of the Lamb",
    },
    {
      name: "og:url",
      content: "https://cotl-save-editor.vercel.app/",
    },
    {
      name: "og:locale",
      content: "en-us",
    },
    {
      name: "og:image",
      content: "https://cotl-save-editor.vercel.app/banner.png",
    },
    {
      name: "og:image:alt",
      content: "Cult of the Lamb (English/Chinese/Korean/Japanese Ver.)",
    },
    {
      name: "og:site_name",
      content: "Cult of the Lamb - Save file editor",
    },

    /* Twitter */
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "https://cotl-save-editor.vercel.app/",
    },
    {
      name: "twitter:title",
      content: "Cult of the Lamb - Save file editor",
    },
    {
      name: "twitter:description",
      content: "Save file editor for Cult of the Lamb",
    },
    {
      name: "twitter:image",
      content: "https://cotl-save-editor.vercel.app/banner.png",
    },
    {
      name: "twitter:image:alt",
      content: "Cult of the Lamb (English/Chinese/Korean/Japanese Ver.)",
    },
  ],
});
</script>