# Repo-specific instructions for Claude

This repository is a Tauri 2 desktop app with a SvelteKit (Svelte 5) frontend using Tailwind CSS v4 and shadcn-svelte components, managed with pnpm.

## Quick Commands

Use `pnpm` for all package management:

- Dev (full Tauri app): `pnpm dev`
- Build (desktop binary): `pnpm build`
- Check: `pnpm check` (TypeScript)
- Lint: `pnpm lint` (ESLint)

## Important Project Files

- `package.json` — scripts, pnpm configuration
- `README.md` — getting started, tech stack
- `svelte.config.js` — adapter (static/SPA), path aliases (`@/*` → `./src/lib/*`)
- `vite.config.js` — Tailwind, Tauri dev server config (port 1420)
- `src-tauri/tauri.conf.json` — Tauri app config, window settings, build commands
- `src-tauri/src/` — Rust backend (lib.rs, main.rs)
- `src/lib/components/ui` — shadcn-svelte UI components
- `src/lib/utils.ts` — `cn()` class merging utility

## Architecture & Conventions

### UI Components & Styling

- **shadcn-svelte**: Use pre-built accessible components from shadcn-svelte. Reference: https://shadcn-svelte.com/llms.txt
- **Adding components**: Use the `add-new-shadcn-component` command to add new shadcn-svelte components.
- **Tailwind CSS v4**: Use utility classes for styling. No `@apply` in components; use `cn()` utility from `$lib/utils` to merge classes.
- **Class merging**: Always use `cn()` when conditionally applying Tailwind classes: `class={cn('base-class', condition && 'conditional-class')}`
- **Clean CSS**: Never use inline styles, and keep the number of CSS classes to the absolute minimum.

### Animations & Transitions

The app uses a layered animation approach. Each layer uses the simplest tool that works, and all animations respect `prefers-reduced-motion` via a global media query.

**Hierarchy (prefer higher layers first):**

1. **CSS pseudo-classes (`:active`, `:hover`, `:focus`)** — for instant interaction feedback. Zero JS, zero overhead.
2. **Tailwind utility classes and CSS keyframes** — for entrance effects, tab switches, and any animation that doesn't depend on dynamic height. Use `data-*` attribute selectors (e.g. `data-[state=active]:animate-fade-in-up`) to tie animations to component state set by bits-ui/shadcn-svelte.
3. **View Transitions API** — for page navigation cross-fades. Progressive enhancement — does nothing in unsupported browsers.
4. **Svelte transitions (`transition:slide`, `in:fly`)** — only when CSS alone can't do it. The primary use case is `transition:slide` for expand/collapse of content with `height: auto`.

**What NOT to animate:** shadcn-svelte overlays (Dialog, Sheet, Popover, Select, AlertDialog) already have animations via `tw-animate-css` — don't add competing transitions.

### Component Patterns

- **Svelte 5 syntax**: Use modern runes (`$state()`, `$derived()`, `$effect()`, `$props()`)
- **Singleton components**: Files named `Singleton*` are single-instance widgets that export imperative functions
- **UI components**: shadcn-svelte components are stored in `src/lib/components/ui`
- **Component docs**: Use JSDoc `@component` tag at top of `.svelte` files

### State Management

- **Simple state**: Use Svelte 5 runes (`$state()`, `$derived()`)
- **Stores**: Only for modules that export a real Svelte store using `writable`, `readable`, or `derived` from `svelte/store`.
- **Services**: Singleton classes exported as default instances. Use services for rune-based reactive state (`$state`, `$derived`, `$effect`) and for non-reactive utilities. Name files as `<Name>Service.ts` or `<Name>Service.svelte.ts` if the file uses Svelte runes.

## Before Considering a Task Complete

1. Run and fix any issues: `pnpm lint --fix`, `pnpm check`

## Code Style

### Types & Functions

- NEVER use `any` (use `unknown` if absolutely unavoidable)
- Add explicit types when unclear; extract complex object types to separate `type` declarations
- Use PascalCase for type names; file names should match the primary exported type
- Use arrow functions and `const`/`let` (never `var`)
- Use `async`/`await` instead of `.then()`

### Documentation & Naming

- Add JSDoc for all methods, functions, and classes (include `@param`, omit `@returns`)
- Add JSDoc for public class properties only if complex
- Never prefix functions/methods with underscores

### Class Structure

- Order methods by visibility: public, protected, private

## File Organization

### Barrel Files (`index.ts`)

- Only use a barrel file when a folder has a **single public export** and all other files are internal implementation details.
- Do **not** create barrel files that aggregate exports from multiple unrelated modules.

### Imports

- Use named imports only (NEVER `import * as`)
- Import at file top (inline only when absolutely necessary)

### Enums

- Use PascalCase for enum names and values
- Use TypeScript `enum` (not `const enum` or `type`)
- Prefer string enums over string unions

### Syntax and Best Practices

- NEVER use `['propertyName']` syntax to access properties
- Use object destructuring when accessing multiple properties
- Prefer template literals over string concatenation
