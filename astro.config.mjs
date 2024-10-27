import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://hacksheffield.uk',
    output: 'server',
    adapter: node({
        mode: "standalone"
    })
});
