import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  extract: {
    include: ["**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
});
