---
name: add-new-shadcn-component
description: Add shadcn-svelte UI components to this project following the exact workflow below.
---

Add the following shadcn-svelte UI components to this project: $ARGUMENTS

## Required Workflow

For each component, follow these steps in order:

### 1. Install the component

Run: `pnpm dlx shadcn-svelte@latest add COMPONENT-NAME`

See available components at https://shadcn-svelte.com/docs/components

### 2. Fix formatting

Run: `pnpm lint --fix`

### 3. Rename component files to PascalCase

Rename files to match their default export names.

Example: `card.svelte` -> `Card.svelte`, `card-action.svelte` -> `CardAction.svelte`

### 4. Rename component folder to PascalCase

Example: `alert` folder -> `Alert` folder

### 5. Update the index.ts barrel file

Keep the auto-generated `index.ts` barrel file. Update any import paths inside it to reflect the renamed PascalCase filenames.

### 6. Create a Storybook story

Create a `ComponentName.stories.svelte` file inside the component folder. Follow this pattern:

```svelte
<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { createInvisibleArgTypes } from '$storybook/storybookUtil';
  import ComponentName from './ComponentName.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/ComponentName',
    component: ComponentName,
    argTypes: {
      ...createInvisibleArgTypes('ref', 'children')
    },
    args: {
      // Set sensible defaults for the component's props
    }
  });
</script>

<!-- Create a Story for each meaningful variant/state of the component -->
<Story name="Default">Default Content</Story>
```

Key rules for stories:

- Title format: `UI Components/ComponentName`
- Use `createInvisibleArgTypes` from `$storybook/storybookUtil` to hide `ref`, `children`, and other non-useful props
- Let Storybook infer variant/size controls automatically — do not manually specify argTypes for them
- Cover all meaningful variants and states (e.g. each variant value, disabled state, with icons)
- Follow the Storybook Stories conventions in CLAUDE.md for wrapper components
- Reference `src/components/ui/Button/Button.stories.svelte` as an example

### 7. Update imports in existing files

If any existing files imported this component from the old path, update them to use the new `$ui/ComponentName` path.

## Final Steps

1. Run `pnpm lint --fix` and `pnpm check` to verify everything passes
2. Return a summary of what was added and where the files are located
