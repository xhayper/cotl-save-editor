import type { SaveData } from "./types";
import { defineStore } from "pinia";

export const useSaveStore = defineStore({
    id: "save",
    state: () => ({ saveData: {} as SaveData, fileName: "slot_0.json" }),
    getters: {},
    actions: {
        async load(ctx: { data: Uint8Array; fileName: string }): Promise<boolean> {
            const { data, fileName } = ctx;

            if (data.at(0) === 69) {
                try {
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

                    let saveData;

                    try {
                        saveData = JSON.parse(new TextDecoder().decode(decrypted));
                    } catch (e) {
                        throw e;
                    }

                    Object.assign(this.saveData, saveData ?? this.saveData);

                    if (saveData) {
                        this.fileName = fileName;
                        return true;
                    }
                } catch (err) {}
            } else {
                let saveData;

                try {
                    saveData = JSON.parse(new TextDecoder().decode(data));
                } catch (e) {}

                Object.assign(this.saveData, saveData ?? this.saveData);
                if (saveData) {
                    this.fileName = fileName;
                    return true;
                }
            }

            return false;
        },
        async save(encrypt = false) {
            let data = new TextEncoder().encode(JSON.stringify(this.saveData));
            if (encrypt) {
                const cryptoKey = await window.crypto.subtle.generateKey(
                    {
                        name: "AES-CBC",
                        length: 128
                    },
                    true,
                    ["encrypt"]
                );

                const key = await window.crypto.subtle.exportKey("raw", cryptoKey);
                const iv = window.crypto.getRandomValues(new Uint8Array(16));
                const encrypted = await window.crypto.subtle.encrypt({ name: "AES-CBC", iv }, cryptoKey, data);

                data = new Uint8Array(1 + key.byteLength + iv.byteLength + encrypted.byteLength);
                data.set([69]);
                data.set(new Uint8Array(key), 1);
                data.set(iv, 1 + key.byteLength);
                data.set(new Uint8Array(encrypted), 1 + key.byteLength + iv.byteLength);
            }
            const blob = new Blob([data], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = this.fileName;
            anchor.click();
            URL.revokeObjectURL(url);
        }
    }
});
