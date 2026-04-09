import svelteConfig from '@aneuhold/eslint-config/src/svelte-config.js';
import storybook from 'eslint-plugin-storybook';

export default [
  ...svelteConfig,
  ...storybook.configs['flat/recommended'],
  { ignores: ['src-tauri/'] },
  {
    rules: {
      // Extra rules here / overrides
    }
  }
];
