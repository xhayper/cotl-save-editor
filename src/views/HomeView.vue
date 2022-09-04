<script setup lang="tsx">
import { useSaveStore } from "@/stores/save";

const save = useSaveStore();

const loadFile = (payload: Event<EventTarget | HTMLInputElement>) => {
    if (!(payload.target instanceof HTMLInputElement)) return;
    const file = payload.target.files![0];

    const reader = new FileReader();
    reader.onloadend = (ev: ProgressEvent<FileReader>) => {
        save.load({ fileName: file.name, data: new Uint8Array(ev.target!.result! as ArrayBuffer) });
    };
    reader.readAsArrayBuffer(file);
};
</script>

<template>
    <input type="file" id="file-selector" accept=".json" v-on:change="loadFile" />
    {{ save.saveData.CultFaith }}
</template>
