<script setup lang="tsx">
import { useSaveStore } from "@/stores/save";
import JsonEditorVue from "json-editor-vue";
import { ref } from "vue";

const saveStore = useSaveStore();
const shouldEncrypt = ref(true);

const loadFile = (payload: Event<EventTarget | HTMLInputElement>) => {
    if (!(payload.target instanceof HTMLInputElement)) return;
    if (!payload.target.files || payload.target.files.length === 0) {
        return;
    }
    const file = payload.target.files![0];

    // toast?.show(
    //     { title: "Info", body: `loading "${file.name}"...` },
    //     { pos: "top-right", variant: "dark", delay: 1000 }
    // );

    const reader = new FileReader();
    reader.onloadend = async (ev: ProgressEvent<FileReader>) => {
        if (!(await saveStore.load({ fileName: file.name, data: new Uint8Array(ev.target!.result! as ArrayBuffer) }))) {
            // toast?.show(
            //     { title: "Error!", body: `an error has occured while trying to read "${file.name}"!` },
            //     { pos: "top-right", variant: "dark", delay: 1000 }
            // );
        } else {
            // toast?.show(
            //     { title: "Success!", body: `loaded "${file.name}"!` },
            //     { pos: "top-right", variant: "dark", delay: 1000 }
            // );
        }
    };
    reader.readAsArrayBuffer(file);
};

const saveFile = () => saveStore.save(shouldEncrypt.value);
</script>

<template>
    <div class="py-1 px-1 mx-auto">
        Load file:
        <ul>
            <li>
                <label for="loadfile">File: </label>
                <ul>
                    <li>
                        <input
                            type="file"
                            id="loadfile"
                            v-on:change="loadFile"
                            v-on:drop="loadFile"
                            v-on:dragenter="(evt) => evt.preventDefault()"
                        />
                    </li>
                </ul>
            </li>
        </ul>
        Save file:
        <ul>
            <li>
                <label for="filename">File name: </label>
                <ul>
                    <li>
                        <input v-model="saveStore.fileName" id="filename" />
                    </li>
                </ul>
            </li>
            <li>
                <div class="form-check">
                    <label class="form-check-label" for="shouldEncrypt"> Encrypt: </label>
                    <ul>
                        <li>
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="shouldEncrypt"
                                v-model="shouldEncrypt"
                            />
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <button v-on:click="saveFile">Save</button>
            </li>
        </ul>
        <a style="color: #ffc107" href="https://github.com/xhayper/cotl-save-editor" target="_blank">Source code</a>
        <JsonEditorVue
            v-if="saveStore.saveData != null && Object.keys(saveStore.saveData).length > 0"
            v-model="saveStore.saveData"
        />
    </div>
</template>
