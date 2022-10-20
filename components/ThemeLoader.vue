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
        ((!theme || theme === "auto") && window.matchMedia("(prefers-color-scheme: dark)").matches)
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

useTheme();
</script>

<template>
  <div style="
      width: 0;
      height: 0;
      margin: 0;
      padding: 0;
      position: absolute;
      display: unset;
    " />
</template>
