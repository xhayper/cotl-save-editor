<script setup lang="tsx">
import { useSaveStore } from "@/stores/save";

const save = useSaveStore();
</script>

<template>
    {{ save.cultName }}
</template>
