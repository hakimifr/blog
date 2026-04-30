// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://hakimifr.github.io',
  base: '/blog',
  integrations: [
    starlight({
      title: 'Hakimi\'s blog',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hakimifr/blog' }],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        // {
        //   label: 'Guides',
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: 'Example Guide', slug: 'guides/example' },
        //   ],
        // },
        {
          label: 'Blog Content',
          autogenerate: { directory: 'contents' },
        },
      ],
    }),
  ],
});
