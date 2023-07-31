<template>
    <JsonEditorVue v-bind="$attrs">
        <slot />
    </JsonEditorVue>
</template>

<script setup lang="ts">
import JsonEditorVue from "json-editor-vue";
</script>