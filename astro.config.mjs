// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";

// Update `site` to your live Cloudflare Pages URL (or custom domain) once deployed.
// It is used for the sitemap and canonical/OG URLs.
// Tailwind v4 is wired through PostCSS (see postcss.config.mjs).
// Icons (Lucide UI + Simple Icons brand logos) are inlined at build by astro-icon.
export default defineConfig({
  site: "https://cloud-portfolio.pages.dev",
  integrations: [sitemap(), icon(), react()],
});
