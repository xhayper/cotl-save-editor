<script setup lang="tsx">
import VueJSONEditor from "../components/VueJSONEditor.vue";
import { useSaveStore } from "@/stores/save";
import { ref } from "vue";

const shouldEncrypt = ref(true);
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

const saveFile = () => save.save(shouldEncrypt.value);
</script>

<template>
    Load file: <input type="file" id="file-selector" accept=".json" v-on:change="loadFile" /><br />
    Save file: <b-form-checkbox v-model="shouldEncrypt">Encrypt</b-form-checkbox>
    <button v-on:click="saveFile">Save</button>
    <VueJSONEditor
        v-if="save.saveData != null && Object.keys(save.saveData).length > 0"
        :content="{ json: save.saveData, title: save.fileName }"
    />
</template>
