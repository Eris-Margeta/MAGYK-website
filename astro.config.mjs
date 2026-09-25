import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import config from "./src/config/config.json";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "https://magyk.vercel.app/",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  prefetch: { prefetchAll: true },
  redirects: {
    "/company": "/about",
    "/team": "/about#team",
    "/privacy": "/privacy-policy",
    "/terms": "/terms-conditions",
  },
  integrations: [
    sitemap({ filter: (page) => !page.includes("/404") }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
});
