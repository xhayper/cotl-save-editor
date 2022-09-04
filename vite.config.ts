import { fileURLToPath, URL } from "node:url";
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
            "~bootstrap-vue-3": path.resolve(__dirname, "node_modules/bootstrap-vue-3"),
            "~bootstrap-icons": path.resolve(__dirname, "node_modules/bootstrap-icons")
        }
    },
    build: {
        sourcemap: "inline"
    }
});
