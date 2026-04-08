Add shadcn-svelte UI components to this project following the exact workflow below.

## Required Workflow

Follow these steps in order:

1. **Install the component**
   - Run: `pnpm dlx shadcn-svelte@latest add COMPONENT-NAME`
   - See available components at https://shadcn-svelte.com/docs/components

2. **Fix formatting**
   - Run any available linting/formatting after installing

3. **Rename component files**
   - Rename files to match their default export names (PascalCase)
   - Example: `card.svelte` -> `Card.svelte`, `card-action.svelte` -> `CardAction.svelte`

4. **Rename component folder**
   - Rename the containing folder to PascalCase
   - Example: `alert` folder -> `Alert` folder

5. **Keep the generated index.ts file**
   - Keep the auto-generated `index.ts` barrel file
   - Update any import paths inside `index.ts` to reflect the renamed PascalCase filenames

## Final Steps

After completing all workflow steps:

1. Verify the component is properly integrated
2. Return a summary of what was added and where the files are located
