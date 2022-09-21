<script setup lang="tsx">
import 'vanilla-jsoneditor/themes/jse-theme-dark.css';

import JsonEditorVue from 'json-editor-vue';
import { useDropZone } from '@vueuse/core';

const {
    shouldEncrypt,
    saveData,
    importSave,
    exportSave
} = useSaveState();

const isDark = useDark();
const toggleDark = useToggle(isDark);

const fileName = ref<string>('slot_0.json');

const loadFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = (ev: ProgressEvent<FileReader>) => {
        fileName.value = file.name;
        importSave(new Uint8Array(ev.target!.result! as ArrayBuffer));
    };

    reader.readAsArrayBuffer(file);
}

const dropZoneRef = ref<HTMLElement>();
const { isOverDropZone } = useDropZone(dropZoneRef, (files: File[] | null) => {
    if (!files || 0 >= files.length) return;
    loadFile(files[0]);
});

const downloadSave = async () => {
    if (!document) return;

    const blob = new Blob([await exportSave()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName.value;
    anchor.click();
    URL.revokeObjectURL(url);
}

const selectFile = () => {
    if (!document) return;

    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = (e) => {
        if (!e || !e.target || !(e as any).target.files || 0 >= (e as any).target.files.length) return;

        loadFile((e as any).target.files[0]);
    }

    input.click();
}
</script>

<style lang="scss">
label {
    color: #FFFF;
}
</style>

<template>
    <div ref="dropZoneRef" class="w-screen h-screen sticky">
        <div v-if="isOverDropZone" class="flex w-screen h-screen absolute items-center">
            <label class="text-black dark:text-white text-2xl mx-auto">Drop the file here!</label>
        </div>
        <div :class="{
            'blur-md': isOverDropZone
        }">
            <header>
                <div class="w-screen sticky pl-1 h-8" :style="[
                   'background-color: var(--jse-theme-color)'
                ]" :class="{
                'jse-theme-dark': isDark
            }">
                    <!-- Button Container -->
                    <div class="flex flex-row px-2 basis-2 items-center">
                        <div class="flex flex-row h-8 items-center">
                            <input type="checkbox" v-model="shouldEncrypt" />
                            <label class="pl-1">Encrypt save file</label>

                            <div class="px-2" />

                            <label class="pl-1">File name:</label>
                            <div class="px-1" />
                            <input class="h-4 w-24 text-xs" type="input" v-model="fileName" />
                        </div>

                        <div class="flex flex-row ml-auto mr-auto">
                            <button class="w-6 h-6" @click="selectFile()">
                                <svg class="text-white hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                                </svg>
                            </button>
                        </div>

                        <div class="flex flex-row ml-auto">
                            <!-- https://heroicons.com/ -->
                            <button class="w-6 h-6" @click="downloadSave()">
                                <svg class="text-white hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </button>
                            <div class="px-1" />
                            <button class="w-6 h-6" @click="toggleDark()">
                                <client-only>
                                    <svg v-if="isDark" class="text-white hover:text-black"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                    <svg v-else class="text-white hover:text-black" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </client-only>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <client-only>
                <JsonEditorVue v-model="saveData" :class="{
                    'jse-theme-dark': isDark
                }" />
            </client-only>
        </div>
    </div>
</template>