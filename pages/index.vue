<style scope lang="scss">
label {
    color: #ffff;
}
</style>

<template>
    <div ref="dropZoneRef" class="w-screen h-screen">
        <div v-if="isOverDropZone" class="z-[100] flex w-screen h-screen absolute justify-center items-center">
            <div class="fixed">
                <label class="text-black dark:text-white text-2xl">Drop the file here!</label>
            </div>
        </div>
        <div :style="[isOverDropZone ? 'filter: blur(4px)' : '']">
            <header class="w-screen h-8">
                <div class="z-[99] w-screen" :style="['background-color: var(--jse-theme-color)']" :class="{
                    'jse-theme-dark': isDark,
                }">
                    <!-- Button Container -->
                    <div class="flex flex-row px-2 basis-2 items-center">
                        <div class="flex flex-row h-8 items-center">
                            <div class="flex flex-row items-center">
                                <label>Encrypt save file:</label>
                                <div class="px-1" />
                                <input type="checkbox" v-model="shouldEncrypt" />
                            </div>
                            <div class="px-2" />
                            <div class="flex flex-row items-center">
                                <label>File name:</label>
                                <div class="px-1" />
                                <input class="h-4 w-24 text-xs" type="input" v-model="fileName" />
                            </div>
                        </div>

                        <div class="flex flex-row absolute left-[50%] translate-x-[-50%]">
                            <!-- https://heroicons.com/ -->
                            <button class="w-6 h-6" @click="selectFile()">
                                <svg class="text-white hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                                </svg>
                            </button>
                            <div class="px-1" />
                            <button class="w-6 h-6" @click="downloadSave()">
                                <svg class="text-white hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </button>
                        </div>

                        <div class="flex flex-row ml-auto">
                            <!-- https://icons.getbootstrap.com/icons/github/ -->
                            <NuxtLink class="w-6 h-6" to="https://github.com/xhayper/cotl-save-editor" target="_blank">
                                <svg class="text-white hover:text-black" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </NuxtLink>
                            <!-- https://heroicons.com/ -->
                            <div class="px-1" />
                            <button class="w-6 h-6" @click="toggleDark()">
                                <client-only>
                                    <svg v-if="isDark" class="text-white hover:text-black"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="{1.5}" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                    <svg v-else class="text-white hover:text-black" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor">
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
                    'jse-theme-dark': isDark,
                }" />
            </client-only>
        </div>
    </div>
</template>

<script setup lang="tsx">
import "vanilla-jsoneditor/themes/jse-theme-dark.css";

import JsonEditorVue from "json-editor-vue";

const { shouldEncrypt, saveData, importSave, exportSave } = useSaveState();

const { isDark, toggleDark } = useTheme();

const fileName = ref("slot_0.json");

const loadFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = (ev: ProgressEvent<FileReader>) => {
        fileName.value = file.name;
        importSave(new Uint8Array(ev.target!.result! as ArrayBuffer));
    };

    reader.readAsArrayBuffer(file);
};

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
};

const selectFile = () => {
    if (!document) return;

    const input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
        if (
            !e ||
            !e.target ||
            !(e as any).target.files ||
            0 >= (e as any).target.files.length
        )
            return;

        loadFile((e as any).target.files[0]);
    };

    input.click();
};
</script>