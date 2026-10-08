import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ToolkitSidebar } from './src/manuals/navigation/ToolkitSidebar';

const repository = 'WGRD-Mod-Toolkit';
const base = `/${repository}`;

export default defineConfig({
  site: 'https://blacktearemos.github.io',
  base,
  integrations: [
    starlight({
      title: 'WGRD Mod Toolkit',
      description: 'Guides and tutorials for WGRD Mod Toolkit.',
      logo: {
        src: './src/assets/toolkit-logo.png',
        alt: 'WGRD Mod Toolkit',
      },
      favicon: '/favicon.ico',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/BlackTeaRemos/WGRD-Mod-Toolkit',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/tMDWaBqSsu',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      pagefind: false,
      components: {
        Header: './src/components/manual/Header.astro',
        Search: './src/components/search/Search.astro',
      },
      sidebar: [ToolkitSidebar.Build()],
    }),
  ],
});
