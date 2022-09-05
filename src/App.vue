<script setup lang="tsx">
import { RouterView } from "vue-router";
</script>

<template>
    <b-container :toast="{ root: true }" fluid="sm" position="position-fixed"></b-container>
    <RouterView />
</template>
