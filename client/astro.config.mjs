import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
  integrations: [react({}), tailwind(), starlight({
    title: 'Micro Storage Docs'
  })],
  vite: {
    define: {
      "process.env.IS_PREACT": JSON.stringify("false"),
    },
  }
});
