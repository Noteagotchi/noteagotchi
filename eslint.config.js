import svelteConfig from '@aneuhold/eslint-config/src/svelte-config.js';
import storybook from 'eslint-plugin-storybook';

export default [
  ...svelteConfig,
  ...storybook.configs['flat/recommended'],
  { ignores: ['src-tauri/'] },
  {
    rules: {
      // Disabled because it seemed to be causing issues with a generic type
      // that is used in an assertion `as type` at the end of a method
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      // Disabling this because we will have dynamic routes
      'svelte/no-navigation-without-resolve': 'off',
      // Disabled due to false positives with Svelte components
      '@typescript-eslint/no-useless-default-assignment': 'off',
      // Disabled because it wasn't working correctly with Svelte snippets
      '@typescript-eslint/no-confusing-void-expression': 'off',
      // Disabled because it doesn't make sense IMO. This should be disabled globally.
      '@typescript-eslint/prefer-literal-enum-member': 'off'
    }
  }
];
