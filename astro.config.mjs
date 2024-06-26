import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://yashjawale.github.io',
  integrations: [mdx(), sitemap(), tailwind(), icon(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }),]
});