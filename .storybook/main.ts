import type { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-svelte-csf',
    '@storybook/addon-themes'
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {}
  },
  staticDirs: ['../static'],
  viteFinal(config) {
    return mergeConfig(config, {
      server: {
        fs: {
          allow: ['./static']
        }
      }
    });
  }
};
export default config;
