import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jamesmete.com',
  integrations: [tailwind(), partytown({
    config: {
      forward: ["datalayer.push"]
    }
  }), sitemap()]
});