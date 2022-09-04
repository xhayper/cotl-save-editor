import type { SaveData } from "./types";
import { defineStore } from "pinia";

export const useSaveStore = defineStore({
    id: "save",
    state: () => ({ saveData: {} as SaveData, fileName: "slot_0.json" }),
    getters: {},
    actions: {
        async load(ctx: { data: Uint8Array; fileName: string }) {
            const { data, fileName } = ctx;

            this.fileName = fileName;
            this.saveData = {} as any;

            if (data.at(0) === 69) {
                const key = await window.crypto.subtle.importKey(
                    "raw",
                    data.subarray(1, 17),
                    {
                        name: "AES-CBC",
                        length: 128
                    },
                    false,
                    ["decrypt"]
                );
                const decrypted = await window.crypto.subtle.decrypt(
                    {
                        name: "AES-CBC",
                        iv: data.subarray(17, 33)
                    },
                    key,
                    data.subarray(33)
                );
                Object.assign(this.saveData, JSON.parse(new TextDecoder().decode(decrypted)));
            } else {
                Object.assign(this.saveData, JSON.parse(new TextDecoder().decode(data)));
            }
        }
    }
});
