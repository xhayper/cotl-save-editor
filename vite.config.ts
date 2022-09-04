import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
            "~bootstrap-icons": path.resolve(__dirname, "node_modules/bootstrap-icons")
        }
    },
    build: {
        sourcemap: true
    }
});
