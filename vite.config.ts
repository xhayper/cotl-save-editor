import { fileURLToPath, URL } from "node:url";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        VitePWA({
            registerType: "autoUpdate",
            devOptions: {
                enabled: true
            },
            manifest: {
                short_name: "Save editor",
                name: "Cult of the Lamb save editor",
                description: "Save file editor for Cult of the Lamb",
                icons: [
                    {
                        src: "/icon.png",
                        sizes: "512x512",
                        type: "image/png"
                    },
                    {
                        src: "/mask-icon.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable"
                    }
                ],
                start_url: "/",
                background_color: "#343A40",
                display: "standalone",
                orientation: "portrait",
                scope: "/",
                theme_color: "#CD2524"
            },
            workbox: {
                additionalManifestEntries: [{ url: "/", revision: null }]
            }
        })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
            "~bootstrap-vue-3": path.resolve(__dirname, "node_modules/bootstrap-vue-3"),
            "~bootstrap-icons": path.resolve(__dirname, "node_modules/bootstrap-icons")
        }
    },
    build: {
        sourcemap: true
    }
});
