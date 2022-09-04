import { defineStore } from "pinia";

export const useSaveStore = defineStore({
    id: "save",
    state: () => ({
        cultName: "Cult of the Lamb"
    }),
    getters: {},
    actions: {
        setCultName(name: string) {
            this.cultName = name;
        }
    }
});
