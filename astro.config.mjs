import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://asus-repairer.ir",
  integrations: [tailwind(), sitemap()],
});
