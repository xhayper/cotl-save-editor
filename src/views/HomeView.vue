<script setup lang="tsx">
import VueJSONEditor from "../components/VueJSONEditor.vue";
import { useSaveStore } from "@/stores/save";
import { useToast } from "bootstrap-vue-3";
import { ref } from "vue";

const shouldEncrypt = ref(true);
const save = useSaveStore();
const toast = useToast();

const loadFile = (payload: Event<EventTarget | HTMLInputElement>) => {
    if (!(payload.target instanceof HTMLInputElement)) return;
    if (!payload.target.files || payload.target.files.length === 0) {
        return;
    }
    const file = payload.target.files![0];

    const reader = new FileReader();
    reader.onloadend = async (ev: ProgressEvent<FileReader>) => {
        if (!(await save.load({ fileName: file.name, data: new Uint8Array(ev.target!.result! as ArrayBuffer) })))
            toast?.show(
                { title: "Error!", body: `an error has occured while trying to read "${file.name}"` },
                { pos: "bottom-right", variant: "danger" }
            );
    };
    reader.readAsArrayBuffer(file);
};

const saveFile = () => save.save(shouldEncrypt.value);
</script>

<template>
    Load file:
    <input
        type="file"
        id="file-selector"
        v-on:change="loadFile"
        v-on:drop="loadFile"
        v-on:dragenter="(evt) => evt.preventDefault()"
    /><br />
    Save file: <b-form-checkbox v-model="shouldEncrypt">Encrypt</b-form-checkbox>
    <button v-on:click="saveFile">Save</button><br />
    <a href="https://github.com/xhayper/cotl-save-editor" target="_blank">Source code</a>
    <VueJSONEditor
        v-if="save.saveData != null && Object.keys(save.saveData).length > 0"
        :content="{ json: save.saveData, title: save.fileName }"
    />
</template>
