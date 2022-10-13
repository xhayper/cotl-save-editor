<script setup>
// Prevent FOUC
useHead({
  script: [
    {
      children: `
(() => {
    const root = document.documentElement;
    const theme = localStorage.getItem("theme");
    if (
        theme === "dark" ||
        (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
})();
`,
    },
  ],
});

useDark();
</script>

<template><div /></template>
