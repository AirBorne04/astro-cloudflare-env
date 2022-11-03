import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';

// https://astro.build/config
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [solid()],
  output: 'server',
  adapter: cloudflare({ mode: 'directory' }),

  vite: {
    define: {
      'process.env.SECRET': process.env.SECRET,
      'process.env.USER': process.env.USER,
    },
  },
});
