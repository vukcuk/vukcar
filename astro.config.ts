// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? "https://mengesh.github.io" : "http://localhost:4321",
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
